# FEAR CORE UI

Core Sass, fonts and images for Marks and Spencer


### Consuming the Library

The library exposes the following paths:
- sassPaths
- assetPaths
- assetImagePaths
- assetFontPaths

1. Run `npm install https://github.com/DigitalInnovation/fear-core-ui --save-dev`
2. Add the following to the gulp sass compile file.
```js
var fearCoreUI = require('fear-core-ui');
...
...
.pipe(sass({
    includePaths: fearCoreUI.sassPaths
}))
```
3. The following variables need to be set
```css
$fear-core-ui-font-dir: '/assets/fonts';

$fear-core-ui-sprite-image-dir: '/assets/images/sprites';
```
4. Copy fear-core-ui assets to your working directory
```js
var fearCoreUI = require('fear-core-ui');

gulp.task('copy-fear-core-ui-assets', function() {
    return gulp.src([fearCoreUI.assetPaths + '/**/*.*'])
        .pipe(gulp.dest('/assets'));
});
```

**Note that the variables set in step 3 should correspond to the location of the assets copied in step 4.**

You can now reference any sass file.

#### example:
```
@import 'fear-core-ui/base';
@import 'fear-core-ui/typography';
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
    @import 'utilities/extends';
```
  
This can be done because the sass code in these files do not add CSS unless mixins / extends are explicitly called from the consuming code.

## Explicit imports

When a sass file contains direct CSS it needs to consumed through an explicit import. 

i.e. If I only wanted to use the `buttons.sass` component. Importing an aggregate `components.sass` 
which included all the components CSS. That would create bloat and unused CSS being included in the consuming project.
 
**Example**
The buttons components contains direct CSS and must be imported through a direct import and not an aggregate sass file.

`@import ui-pattern/buttons;`

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
