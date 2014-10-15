Submodal
==================

Add submodals to Bootstrap 3.x modals

<img src="http://i.imgur.com/Jr9RRqq.png">

## Installing
You can install Submodal via bower
```bash
$ bower install submodal
```
Then include the JS and CSS in your page.
```html
<link type="text/css" rel="stylesheet" href="bs.sm.css">
<script type="text/javascript" src="bs.sm.js"></script>
```

## Building
```bash
$ npm install
$ npm run-script bower
$ npm run-script build

# For watching
$ npm run-script build-watch
```


## HTML

Submodals are added to the `.modal-body` element of a modal. It's HTML structure is identical to regular modals excluding the following **two differences**

* Sub Modals do not have a `.modal-header` element
* Sub Modals must have a class of `.submodal` (in addition to `.modal`)

```html
<div class="modal">
    <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header">[...]</div>
            <div class="modal-body">

                <!-- Your Sub Modal, requires sub-modal class -->
                <div class="modal submodal">[...submodal content...]</div>

                <p>[parent modal content]</p>
            </div>
            <div class="modal-footer">[...]</div>
        </div>
    </div>
</div>
```
<hr />
## Data Attributes

This resembles Twitter Bootstrap's data API:

**Opening**
```html
<a href="#my-submodal" class="btn" data-toggle="submodal">Open Submodal</a>
```

**Closing**
```html
<a href="#my-submodal" class="btn" data-dismiss="submodal">Close Submodal</a>
```
<hr />
## JS API

```javascript

// Open
$('#my-submodal').submodal('open');

// Close
$('#my-submodal').submodal('close');

// Toggle
$('#my-submodal').submodal('toggle');
```
<hr />
## Events

```javascript

// Before submodal is shown
$('#my-submodal').on('beforeShow', fn);

// After submodal is shown
$('#my-submodal').on('show', fn);

// Before submodal is hidden
$('#my-submodal').on('beforeHide', fn);

// After submodal is hidden
$('#my-submodal').on('hide', fn);
```

### Upgrading
There are some things to note when upgrading to the v2.0 version
* Only supports Bootstrap 3.x
* The `subModal` namespace has been renamed to `submodal`

### Known Issues
Currently, there is a nasty overflow issue that may take a while to fix. Please reference the issues list.

### License

MIT, dawg.

<a href="https://twitter.com/grantmnz/status/316438440348622848"><img src="http://i.imgur.com/9IhCklp.jpg"></a>
