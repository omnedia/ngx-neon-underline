# ngx-neon-underline

`@omnedia/ngx-neon-underline` is an Angular library that provides a glowing neon underline effect for your components. The component allows for customization of the colors and width of the underline, making it perfect for adding a striking visual effect to text, headers, or any other elements in your Angular application.

## Features

- Neon underline effect with customizable colors and width.
- Easy to integrate as a standalone component.
- Adds a glowing, animated underline that can enhance your design.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-neon-underline
```

## Usage

Import the `NgxNeonUnderlineComponent` in your Angular module or component:

```typescript
import { NgxNeonUnderlineComponent } from '@omnedia/ngx-neon-underline';

@Component({
  ...
  imports: [
    ...
    NgxNeonUnderlineComponent,
  ],
  ...
})
```

Use the component in your template:

```html
<om-neon-underline
  [middleColor]="'#0ea5e9'"
  [sideColor]="'#6366f1'"
  [width]="'80%'"
  styleClass="custom-neon-class"
></om-neon-underline>
```

## API

```html
<om-neon-underline
  [middleColor]="middleColor"
  [sideColor]="sideColor"
  [width]="width"
  styleClass="your-custom-class"
></om-neon-underline>
```

- `middleColor` (optional): The color of the middle, brighter part of the neon underline. Accepts any valid CSS color value (e.g., '#0ea5e9').
- `sideColor` (optional): The color of the side glows of the neon underline. Accepts any valid CSS color value (e.g., '#6366f1').
- `width` (optional): The width of the underline as a percentage or other CSS width value (e.g., '75%').
- `styleClass` (optional): A custom CSS class to apply to the underline wrapper element.

## Example

```html
<om-neon-underline
  [middleColor]="'#ff5733'"
  [sideColor]="'#c70039'"
  [width]="'60%'"
  styleClass="neon-underline-custom"
></om-neon-underline>
```

This will create a neon underline effect with custom colors and a width of 60% of the parent element's width.

## Styling

To further customize the appearance of the underline, use the styleClass input to apply your own CSS classes. Here's an example:

```css
.neon-underline-custom {
  margin: 20px 0;
}

.neon-underline-custom .om-neon-underline-color-1,
.neon-underline-custom .om-neon-underline-color-2 {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

This example adds a pulsing animation to the neon underline for an enhanced effect.

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License.