const MasonryActiveClassName = 'masonryActive';

class Masonry {
  constructor(element, options = {}) {
    this.containerNode = element;
    this.childrenNodes = element.children;
    this.childrenData = Array.from(this.childrenNodes).map((childNode) => (
      {
        childNode,
        origHeight: Number(childNode.dataset.height),
        origWidth: Number(childNode.dataset.width)
      }));
    
    this.settings = {
      gap: options.gap || 0,
      colums: options.colums || 3
    };

    this.setParametrs();
  }

  setParametrs() {
    const containerWidth = this.containerNode.offsetWidth;
    
    const widthImage = (containerWidth - this.settings.gap * (this.settings.colums - 1)) / this.settings.colums;

    this.childrenData = this.childrenData.map((child) => ({
      ...child,
      currentWidth: widthImage,
      currentHeight: Math.floor(widthImage * child.origHeight / child.origWidth)
    }));

    const heightColums = new Array(this.settings.colums).fill(0);
    const sizeColums = new Array(this.settings.colums).fill(0);
    this.childrenData.forEach((child, i) => {
      heightColums[i % this.settings.colums] += child.currentHeight + this.settings.gap;
      
      sizeColums[i % this.settings.colums] += 1;
    });

    const minHeightColumn = heightColums.reduce((acc, size) => (size < acc) ? size : acc);
    const diffImages = heightColums.map((heightColum, i) => (heightColum - minHeightColumn) / sizeColums[i]);

    this.containerNode.style.width = `${containerWidth}px`;
    this.containerNode.style.height = `${minHeightColumn - this.settings.gap}px`;
    
    const topSets = new Array(this.settings.colums).fill(0);

    this.childrenData = this.childrenData.map((child, i) => {
      const indexColumn = i % this.settings.colums;
      const left = indexColumn * widthImage + this.settings.gap * indexColumn;
      const currentHeight = child.currentHeight - diffImages[indexColumn];
      const top = topSets[indexColumn];
      topSets[indexColumn] += currentHeight + this.settings.gap;

      return {
        ...child,
        currentHeight,
        left,
        top
      };
    });

    this.childrenData.forEach((child) => {
      child.childNode.style.top = `${child.top}px`;
      child.childNode.style.left = `${child.left}px`;
      child.childNode.style.width = `${child.currentWidth}px`;
      child.childNode.style.height = `${child.currentHeight}px`;
    });

    this.containerNode.classList.add(MasonryActiveClassName);
    
  }
}
