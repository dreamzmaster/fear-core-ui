# Pattern Library

An application that acts as a single point of reference for all core patterns used across the fear pages of marksandspencer.com.

### Setup prerequisites
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js and npm](https://docs.npmjs.com/getting-started/installing-node)

### Installation
- Fork the repo
- Clone your new pattern library repo `git clone https://github.com/[YOUR-USERNAME]/pattern-library.git`
- Run `npm install`

#### Gulp tasks

- `gulp serve` - serves the application
- `gulp build` - compiles and minifies the application into the build folder



### Consuming the Pattern Library
1. Run `npm install https://github.com/DigitalInnovation/pattern-library --save-dev`
2. Add the following to the gulp sass compile file.
```
var patternLibrary = require('pattern-library');
...
...
.pipe(sass({
    includePaths: patternLibrary.includePaths
}))
```

You can now reference any sass file under the 'pattern-library/app/sass' folder.

#### example:
```
@import 'base';
@import 'core/mixins';
```

# SASS / CSS coding standards

We want to make sure that unnecessary CSS is not imported to consuming projects.

## Aggregates
The following can be exposed through aggregate files:
- mixins
- variables
- placeholders

**Example:** 
`@import utlities.scss;`

```css
    // utlities.scss
    @import 'utilities/functions';
    @import 'utilities/mixins';
    @import 'utilities/placeholders';
```
  
This can be done because the sass code in these files do not add CSS unless mixins / placeholders are explicitly called from the consuming code.

## Explicit imports

When a sass file contains direct CSS it needs to consumed through an explicit import. 

i.e. If I only wanted to use the `buttons.sass` component. Importing an aggregate `components.sass` 
which included all the components CSS. That would create bloat and unused CSS being included in the consuming project.
 
**Example**
The buttons components contains direct CSS and must be imported through a direct import and not an aggregate sass file.

`@import components/buttons;`

```css
    // buttons.scss
    .btn--primary {
      @include create-btn(40px, 15px, $color__brand--green, $color__brand--dark-grey, $color__brand--background-grey, $color__brand--light-grey);
    }
    
    .btn--secondary {
      @include create-btn(40px, 15px, $color__brand--grey-40, $color__brand--dark-grey, $color__brand--background-grey, $color__brand--light-grey);
    }
```

## Directory structure

```
assets
    |- fonts
    |- images
sass
```

### Directory pattern
```
item.scss
- item // directory
    |- _variables.scss
    |- _extends.scss
    |- _functions.scss
    |- _mixins.scss
    |- _module_itemA.scss
    |- _module_itemB.scss
```

#### item.scss
```css
// item.scss
@import 'item/variables';
@import 'item/extends';
@import 'item/functions';
@import 'item/mixins';
@import 'item/module_itemA';
@import 'item/module_itemB';
```


### Directory categories
```
sass
|- globals
    |- typography.scss
    |- typography
        |- _variables.scss
        |- _module_fonts.scss
    |- colors.scss
|- utilites
    |- _mixins_measurements.scss
|- modules
    |- _buttons.scss
    |- buttons
        |- _mixins.scss
        |- _module_icons.scss
        |- _module_buttons.scss
|- layouts
    |- _grid.scss
    |- grid
        |- _variables.scss        
        |- _mixins.scss        
        |- _module_grid.scss        
    |- _zindex.scss
    |- _header.scss
    |- _footer.scss
```

## CssComb

[http://csscomb.com](http://csscomb.com)
 
`.csscomb.json`
```
{
    "remove-empty-rulesets": true,
    "always-semicolon": true,
    "color-case": "lower",
    "block-indent": "  ",
    "color-shorthand": true,
    "element-case": "lower",
    "eof-newline": true,
    "leading-zero": false,
    "quotes": "single",
    "sort-order-fallback": "abc",
    "space-before-colon": "",
    "space-after-colon": " ",
    "space-before-combinator": " ",
    "space-after-combinator": " ",
    "space-between-declarations": "\n",
    "space-before-opening-brace": " ",
    "space-after-opening-brace": "\n",
    "space-after-selector-delimiter": "\n",
    "space-before-selector-delimiter": "",
    "space-before-closing-brace": "\n",
    "strip-spaces": true,
    "tab-size": true,
    "unitless-zero": true,
    "vendor-prefix-align": true
}
```

## Map files

Generate sass map files?

