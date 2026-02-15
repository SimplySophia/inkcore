export async function generateMockBlog(prompt: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return `
# ${prompt}

In today's fast evolving digital landscape, building scalable and maintainable frontend systems has become critical.

## Introduction

Frontend development is no longer just about interfaces. It is about creating reliable user experiences that scale.

## Key Concepts

• Component architecture  
• State management  
• Performance optimization  
• Scalable folder structures  

## Conclusion

The future belongs to developers who build systems, not just features.
`;
}
