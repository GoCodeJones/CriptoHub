import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-yellow-400 mb-4 mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-yellow-400 mb-3 mt-6">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">{children}</ol>
    ),
    ...components,
  }
}