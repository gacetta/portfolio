import tw, { css } from 'twin.macro';
import { animateScroll as scroll } from 'react-scroll';

const scrollToTop = () => {
  scroll.scrollToTop({
    duration: 1000,
  });
};

const StickyHeader = () => {
  return (
    <div tw="absolute h-full top-0 w-max">
      <div tw="w-max p-4 pb-0" css={{ height: '75vh' }}>
        <p tw="sticky top-4 text-4xl uppercase"></p>
      </div>
      <a tw="sticky top-4 cursor-pointer w-max z-50" onClick={scrollToTop}>
        <p tw="text-4xl uppercase pl-4">Michael Gacetta</p>
      </a>
      <div
        tw="absolute text-4xl pl-4 uppercase z-30 pr-24 bg-gradient-to-r from-gray to-transparent"
        css={{ top: `75vh`, color: `transparent`, width: `100vw` }}
      >
        Michael Gacetta
      </div>
    </div>
  );
};

export default StickyHeader;

{
  /* <a onClick={scrollToTop}>
        <p tw="text-4xl">Navbar</p>
      </a> */
}
