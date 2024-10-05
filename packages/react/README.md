# Getting Started

Skel UI resolves the challenges of implementing skeletons by eliminating the need to create dedicated loading screens and providing an easier way to manage skeleton states using react-context. Learn more [here](https://skel-ui.augustin.zip).

## Installation

Install the package into your project via command line.

```bash
npm install @skel-ui/react
```

## Importing CSS

Import the CSS file into the root of your application.

```js
import "@skel-ui/react/styles.css";
```

## Start crafting UI

Now you are ready to develop your UI.

```jsx
import Skel from "@skel-ui/react";
import Image from "next/Image";

function Profile() {
  const { user, isLoading } = useProfile();

  return (
    <Skel.Root isLoading={isLoading}>
      <Skel.Item className="user-avatar">
        <Image src={user.profile} />
      </Skel.Item>
      <Skel.Item as="h1" className="user-email">
        {user.email}
      </Skel.Item>
    </Skel.Root>
  );
}
```

Now, not only have you designed the skeleton, but you have also done the actual UI. Additionally, the skeleton state for the entire UI is handled in a single place at the `<Skel.Root>` .

## Customization

Customize the default color and border-radius of skeleton using css variables.

```css title="global.css"
:root {
  --skel-ui-color: #cbd5e1;
  --skel-ui-radius: 0.5rem;
}
```

Each `Skel.Item` will have a `data-loading` attribute that is set to `"true"` when the item is in a loading state, and `"false"` otherwise. You can use this attribute in your CSS to create styles based on the loading state.

```css
/* This style will be applied during loading. */
.user-email[data-loading="true"] {
  width: 5rem;
}

/* This style will be applied after loading is done. */
.user-email[data-loading="false"]:hover {
  background: #f97316;
}
```
