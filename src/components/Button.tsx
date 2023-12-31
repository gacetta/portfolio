import tw, { styled, css, theme } from 'twin.macro';

interface ButtonProps {
  $variant?: 'primary' | 'secondary';
  $isSmall?: boolean;
}

const Button = styled.button<ButtonProps>(({ $variant, $isSmall }) => [
  // The common button styles added with the tw import
  tw`transform rounded px-6 py-2 text-black duration-75`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 font-bold)`,

  // Use props to conditionally style your components
  $variant === 'primary' && tw`border-black bg-black text-white`,

  // Combine regular css with tailwind classes within backticks
  $variant === 'secondary' && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`border-2 border-primary-dark bg-primary text-black`,
  ],

  // Conditional props can be used
  $isSmall ? tw`text-sm` : tw`text-lg`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.black`};
  `,
]);

export default Button;
