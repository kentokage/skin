export default { title: "Skin/Fake Button/Dimensions" };

export const large = () => `
<a class="fake-btn fake-btn--large" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const fluid = () =>
    '<a class="fake-btn fake-btn--fluid" href="http://www.ebay.com">Fake Button</a>';

export const fixedWidth = () => `
 <a class="fake-btn" href="http://www.ebay.com" style="width: 200px;">
    Fake Button with a lot of text that should wrap
</a>
`;

export const fixedWidthAndHeight = () => `
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height" href="http://www.ebay.com">
    Fake Button with a lot of text that should wrap
</a>
`;

export const fixedWidthAndHeightTruncated = () => `
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height fake-btn--truncated" href="http://www.ebay.com">
    Fake Button with a lot of text that should wrap
</a>
`;
