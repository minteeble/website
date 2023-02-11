/**
 * Slideshow Types
 */

export enum SlideShowType {
  /**
   * Normal Slideshow
   */
  Normal = 1,
  /**
   * Infinite Slideshow
   */
  Infinite,
}

/**
 * Slideshow Props
 */

export interface SlideShowProps {
  /**
   * Jsx elements to render in the slideshow.
   * It has less priority than images. If "images" is specified, then "items" will be ignored.
   */
  items?: any[];
  /**
   * Images links for only images slideshow
   */
  images?: string[];
  /**
   * Number of items displayed at the same time - default : 4
   */
  displayItems?: number;
  /**
   * Slideshow type
   */
  type: SlideShowType;
  /**
   * Width of slideshow's items in rem - default : 20
   */
  itemWidth?: number;
  /**
   * Slideshow's element click handler if is only images slideshow
   */
  onImageClick?: () => void;
  /**
   * Enable autoscroll
   */
  autoScroll?: boolean;
  /**
   * Autoscroll delay in milliseconds - default : 4000
   */
  autoScrollDelay?: number;
  /**
   * Gap between Slideshow's elements in rem - default 3
   */
  gap?: number;
}
