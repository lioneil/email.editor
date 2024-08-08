import { type NodeViewProps } from '@tiptap/core';

export function toMjml(content: { content: NodeViewProps['node'][] }) {
  console.log(122, content);
  const nodes = content.content as NodeViewProps['node'][];
  return nodes
    .map((node) => {
      switch (node.type as unknown as string) {
        case 'image':
          return `<mj-image fluid-on-mobile="false" css-class="image" src="${node.attrs.src}" alt="${node.attrs.alt}" />`;
        case 'image-block':
          console.log(122, node);
          return `
            <mj-hero
              mode="fluid-height"
              background-url="${node.attrs.src}">${node.content?.map((item) => toMjml(item)).join('')}</mj-hero>
            `;
        case 'paragraph':
          return `<mj-text>${node?.content?.[0]?.text}</mj-text>`;
        default:
          return '';
      }
    })
    .join('');
}
