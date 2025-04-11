## 문제 상황

Flutter에서 emoji_picker 라이브러리를 통해서 이모지를 저장해서 데이터 베이스에 저장했지만, 정확한 이모지가 저장되지 않고, 다른 이모지가 저장되는 오류가 발생하고 있었다.

컬럼의 스키마는 `Name : emoji, Type : varchar(4), Character Set : utf8mb4, Collation : utf8mb4_general_ci` 로 구성되었다.

클라이언트에서는 정확한 값으로 띄워지나, 새로고침(서버에서 데이터를 다시 로드)하는 경우에 이상한 값이 계속 들어오는 것이다. 데이터베이스를 확인해본 결과, 서버까지는 정확한 값이 들어가고 있으나, MySQL 데이터베이스 자체에서 잘못된 값이 저장되고 있었다.

### 문제 예시

👩‍👩‍👦‍👦 와 같은 이모지를 저장하는 경우 👩‍👦 로 변경되서 저장됨.

## 문제 해결 방안 1

MySQL의 utf-8은 4바이트로 저장하는 것처럼 보이지만, 저장은 실제로 3바이트로 char형을 저장한다. → 이모지나 특수 문자들을 제외하면 일반적인 string들은 3바이트로 충분히 저장할 수 있기 때문에, utf-8로 저장하면 3바이트만 저장된다.

따라서 유니코드에 이모지와 같은 실제로 4바이트로 저장되야 하는 값 같은 경우에는 저장할 수 없다.

따라서 이러한 string을 저장하는 경우에는 저장 방식을 일반적인 utf-8이 아닌, utf8mb4로 저장해야 한다.

[MySQL(Maria DB)에 이모지(Emoji) 저장하기](https://velog.io/@lake/MySQLMaria-DB%EC%97%90-%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98Emoji-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0)

→ 이미 utf8mb4로 string을 저장하고 있던 상태였었음. 그리고 utf-8로 저장하고 있던 경우에는 아예 이모지 자체가 표현되거나, 저장되지 않았을 것으로 추측할 수 있다.

## 문제 해결 방안 2

현재 데이터를 저장하고 있는 Character Set이 utf8mb4 형태이지만, Collation이 utf8mb4_general_ci로 저장되고 있음. 찾아본 다른 해결 방안의 경우에는 utf8mb4_unicode_ci로 저장하는 경우를 생각하였다.

[How to store Emoji Character in MySQL Database](https://stackoverflow.com/questions/39463134/how-to-store-emoji-character-in-mysql-database)

→ utf8mb4_unicode_ci와 utf8mb4_general_ci의 차이는 과거에는 cpu 연산 속도의 차이때문에 utf8mb4_general_ci 버전을 사용하였다. 하지만 요즘과 같이 컴퓨터 성능이 좋아진 경우에는 unicode 버전과 general 버전의 차이가 거의 없기 때문에, unicode로 사용해도 상관이 없다는 것이다. 그래서 조금 더 범용적인 unicode 버전으로 바꾸는 추세라고 한다.

- **utf8mb4_unicode_ci VS utf8mb4_general_ci**
  `utf8mb4_general_ci`성능 차이가 중요할 정도로 CPU 속도가 낮은 지점을 남겨두었기 때문에 더 이상 사용할 이유가 거의 없습니다 . 귀하의 데이터베이스는 거의 확실하게 이것 이외의 다른 병목 현상에 의해 제한될 것입니다.
  과거에는 `utf8mb4_general_ci`성능 비용을 정당화할 만큼 정확한 정렬이 중요할 때를 제외하고 일부 사람들이 사용을 권장했습니다. 오늘날 이러한 성능 비용은 거의 사라졌으며 개발자는 국제화를 더욱 심각하게 다루고 있습니다.
  정확도보다 속도가 더 중요하다면 정렬을 전혀 수행하지 않는 것이 나을 수도 있다는 주장이 있습니다. 정확할 필요가 없다면 알고리즘을 더 빠르게 만드는 것은 사소한 일입니다. 따라서 `utf8mb4_general_ci`속도상의 이유로 필요하지 않고 정확성상의 이유로도 적합하지 않은 절충안입니다.
  내가 추가할 또 다른 사항은 응용 프로그램이 영어만 지원한다는 것을 알고 있더라도 사람들의 이름을 처리해야 할 수 있다는 것입니다. 이 이름에는 종종 올바르게 정렬하는 것이 중요한 다른 언어에서 사용되는 문자가 포함될 수 있습니다. . 모든 것에 유니코드 규칙을 사용하면 매우 똑똑한 유니코드 사람들이 정렬 작업을 제대로 수행하기 위해 열심히 노력했다는 사실에 안심할 수 있습니다.

[What's the difference between utf8_general_ci and utf8_unicode_ci?](https://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci)

## 문제 해결 방안 3

아예 이상한 값이 저장되는 것이 아니라, 조금 잘려서 저장되는 값을 보고 이것이 충분한 길이가 안되는지 확인보았다.
![](https://velog.velcdn.com/images/halfmoon_mind/post/642cf83f-eaea-40c0-bbfd-8e540365f7c3/image.png)

데이터를 저장하는 이모지를 보니, 👨‍👩‍👧‍👧 의 경우 제일 긴 길이인 25바이트를 저장하고 있고, 다음은 21바이트, 다음은 14바이트를 저장하고 있었다.

> ![](https://velog.velcdn.com/images/halfmoon_mind/post/c8f0fd4c-c55d-4411-ab05-5ebc8f819219/image.png)
> 매우 공신력 있는 chat gpt. VARCHAR(4)와 VARCHAR(8)의 크기가 각각 16과 32바이트를 저장한다고 알려준다.

위에서 알 수 있듯이, VARCHAR(4)의 경우에는 각 4개의 character를 저장할 수 있는데, 이를 4바이트를 저장하기 때문에 16바이트를 저장하게 된다.

위의 결과를 보니, 이모지를 임의로 큰 값을 넣었을 경우에 `ERROR 1265 : Data truncated for column ’emoji’ at row 1` 와 같은 에러를 발생시키는지 알 수 있었다. 즉 16바이트까지 밖에 저장되지 않는 데이터베이스 컬럼에 그것보다 큰 값이 들어가니, 오류가 나지 않는 선에서 데이터가 저장되고 있던 것이었다.

## 최종 해결 방안

데이터베이스의 emoji 컬럼 값의 Type을 VARCHAR(4)에서 VARCHAR(8)로 저장해서 더 큰 값을 저장할 수 있도록 변경하니, 제대로 저장되는 것을 확인할 수 있었다.

> ![](https://velog.velcdn.com/images/halfmoon_mind/post/ef45b21b-0c6b-447f-bd47-3ca0971e992b/image.png)
> 잘 저장된다!

## 느낀 점

MySQL에서 기본적인 utf-8을 저장하면 3바이트만 저장된다는 것. 그리고 이모지가 다른 여러가지 옵션이 들어가면 점점 데이터의 크기가 커진다는 것을 알 수 있었다.
