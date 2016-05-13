# sky-component-twitter

* [Integration](#toc_1)
* [Development](#toc_10)

## <a id="integration" name="integration"></a>Component Integration

#### Add component dependency to your project

Ensure the following dependency in present in your project package.json.

```
"dependencies": {
  "sky-component-twitter": "https://git.bskyb.com/sky-components/sky-components-twitter"
}
```

#### Create component data object

Create your data structure that conforms to the schema specified by the schema.json. For further safety, you can use this schema.json with a native json schema validator for your chosen language. Represented in pseudocode, this may look like:

```
JsonSchemaValidatorLib.validate('path/to/schema.json', $data);
```

#### Render component

Render the template provided in the component source, using the native handlebars library for your language. In pseudocode, this would look something like this:

```
HandlebarsLib.render('path/to/component.hbs', $data);
```

With the rendered markup, you'll be able to add this to your view stack as per regular integration.


#### Scripts

Scripts are compiled for use on your site, for info on how to go about this and examples, see the [sky-component-skeleton](https://git.bskyb.com/sky-components/sky-component-skeleton) ReadMe and files.


#### Styles - static

To use the default styles bundled with the component, bring the compiled dist/css/component.css file directly into your project.

#### Styles - dynamic

Each component consists of a bundle.css which imports any number of other css files that make up the component. Currently this is a component.css file for structural css and a component-skin.css file for colours, backgrounds and other configurable properties.

In this incarnation the css is vanilla, but uses postcss to enable sass like variables. Each css property that the author regards as configurable is set using a sass variable with the !default feature used to allow it to be overridden. The consuming project can then import the component css into their project and reskin various elements of a component by redefining these variables.

For example, in the story there is a background colour - #eaeaea, set on the media element. For a consuming project to change this to be blue, they would import and compile their css files in this order:

##### consuming-project.css:

```css
$sky-component-twitter-background: blue;
```

##### src/css/component-skin.css:

```css
$sky-component-twitter-background: #eaeaea !default;
```

##### src/css/component.css

```css
.sky-component-twitter {
  background: $sky-component-twitter-background;
}
```


## <a id="dev" name="dev"></a>Component Development

To build this component, navigate to the root and install the node modules:

```
cd /Your/Path/To/sky-component-twitter
npm install
```

Then compile the component using the following. This builds the CSS and also creates an example HTML file in `/dist` of the rendered markup based on the data in `/scripts/example/example.json`.

```
npm run compile
```

To view the example, run this and point your browser to [http://localhost:8080/example.html](http://localhost:8080/example.html)

```
npm start
```

### Code Style/Linting

You should check your Javascript code style in your editor, this is validated at build and will fail testing if it does not conform. The code style is defined in `.jscsrc` in the component root, more info on this can be found here at [http://jscs.info/overview](http://jscs.info/overview)

#### Component Data

Each time the component is compiled the [Data-Structure.md](Data-Structure.md) is documented and automatically generated. This should be used as a reference point to describe what the items are that feature in the data.

There is a data structure that is added as a data attribute to the advert element when rendered which is used to configure the advert, and the structure looks like this:

```
{
  "id": "sky-component-twitter",
}
```

#### Component Tests

Following any amends to a component, it is strongly advised you run the tests which you can do with the following commands. This will recompile the example, validate the JSON schema and run the Jasmine tests against the component.

For unit tests, run the following command to run the Karma tests. This applies to any files ending `*.test.js` in the tests directory (or sub-directories).

```
npm test
```

During development, run the following command to run Karma and watch the `dist` script files for changes. Each time the component is compiled or one of the test `tests/*.test.js` scripts are saved or updated it will run the unit tests against the compiled script and report in the terminal window.

```
npm run test:watch
```

For functional tests, run the following command to run the Jasmine tests specified in any `tests/*.spec.js` files. Tests against the component functionality and/or DOM should be run using Chrome and added to `component.spec.js`. The validation of the scripts are completed in `validation.spec.js`.

```
npm run functional-tests
```


#### Component styles

CSS for the component is written using BEM methodology with the component name as the root name. Eg this component name is 'sky-component-twitter' so css classes are named accordingly:
`.sky-component-twitter`, `.sky-component-twitter--modifier` and `.sky-component-twitter__element`.
