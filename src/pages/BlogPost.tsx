import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// This would typically come from your API or file system
const posts = {
  'getting-started-with-react': {
    title: 'Getting Started with React',
    date: '2024-03-15',
    readingTime: '5 min read',
    content: `
# Getting Started with React

React is a popular JavaScript library for building user interfaces. In this post, we'll cover the basics of React and how to create your first component.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".

> React's virtual DOM implementation and efficient reconciliation algorithm make it incredibly fast and responsive.

## Creating Your First Component

Here's a simple example of a React component:

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

## Key Concepts

1. Components
   - Functional Components
   - Class Components
   - Higher-Order Components

2. Props
   - Passing Data
   - PropTypes
   - Default Props

3. State
   - useState Hook
   - useReducer Hook
   - State Management

4. Lifecycle Methods
   - useEffect Hook
   - Cleanup Functions
   - Dependencies

## Best Practices

- Keep components small and focused
- Use meaningful names
- Follow the DRY principle
- Write reusable components

---

Stay tuned for more React tutorials!
    `,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80'
  },
  'typescript-best-practices': {
    title: 'TypeScript Best Practices',
    date: '2024-03-10',
    readingTime: '8 min read',
    content: `
# TypeScript Best Practices

TypeScript adds optional static types to JavaScript. Let's explore some best practices for writing clean, maintainable TypeScript code.

## Type Inference

TypeScript can infer types automatically in many cases:

\`\`\`typescript
// Type inference working for you
const numbers = [1, 2, 3]; // Type: number[]
const word = "Hello"; // Type: string

// Function return type inference
function add(a: number, b: number) {
  return a + b; // TypeScript knows this returns a number
}
\`\`\`

## Interface vs Type

When to use interfaces and when to use type aliases:

\`\`\`typescript
// Interface for object shapes
interface User {
  name: string;
  age: number;
  email?: string;
}

// Type for unions, intersections
type Status = "pending" | "approved" | "rejected";
type NumberOrString = number | string;
\`\`\`

## Advanced Types

TypeScript provides powerful type manipulation features:

\`\`\`typescript
// Mapped types
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// Conditional types
type NonNullable<T> = T extends null | undefined ? never : T;
\`\`\`

> Remember: TypeScript's type system is designed to be practical and flexible while providing strong type safety.

## Best Practices

1. Enable Strict Mode
2. Use Type Inference When Possible
3. Prefer Interfaces for Public APIs
4. Use Type Guards for Runtime Checks

More TypeScript tips coming soon!
    `,
    coverImage: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80'
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20"
    >
      <Link
        to="/blog"
        className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        <span>Back to Blog</span>
      </Link>

      <article className="space-y-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center space-x-6 text-gray-200">
                <div className="flex items-center space-x-2">
                  <Calendar size={20} />
                  <time>{format(new Date(post.date), 'yyyy년 MM월 dd일')}</time>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={20} />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <ReactMarkdown
              components={{
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={atomDark}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-lg"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.div>
      </article>
    </motion.div>
  );
};

export default BlogPost;