import tw, { css } from 'twin.macro';
import { animateScroll as scroll } from 'react-scroll';

const scrollToTop = () => {
  scroll.scrollToTop({
    duration: 1000,
  });
};

const StickyHeader = () => {
  return (
    <div tw="absolute h-full top-0">
      <div tw="w-max p-4 pb-0" css={{ height: '75vh' }}>
        <p tw="sticky top-4 text-4xl uppercase">Initial Header</p>
      </div>
      <a tw="sticky top-4 cursor-pointer w-max z-50" onClick={scrollToTop}>
        <p tw="text-4xl pl-4 uppercase">Sticky Header</p>
      </a>
    </div>
  );
};

export default StickyHeader;

{
  /* <a onClick={scrollToTop}>
        <p tw="text-4xl">Navbar</p>
      </a> */
}
