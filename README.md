Bootstrap-SubModal
==================

Add Sub-Modals to Bootstrap's Modals.

<img src="http://i.imgur.com/dUrRQfa.png">

## HTML

Sub modals are added to the `.modal-body` element of a modal. It's HTML structure is identical excluding the following **two differences**

* Sub Modals do not have a `.modal-header` element
* Sub Modals must have a class of `.sub-modal` (in addition to `.modal`)

```html
<div class="modal hide fade">
    <div class="modal-header">[...]</div>
    <div class="modal-body">
    
        <!-- Your Sub Modal, requires sub-modal class -->
        <div class="modal sub-modal hide">[...submodal content...]</div>
        
        <p>[parent modal content]</p>
    </div>
    <div class="modal-footer">[...]</div>
</div>
```
<hr />
## Data Attributes

This resembles Twitter Bootstrap's data API:

**Opening**
```html
<a href="#mySubModal" class="btn" data-toggle="submodal">Open Sub Modal</a>
```

**Closing**
```html
<a href="#mySubModal" class="btn" data-dismiss="submodal">Close Sub Modal</a>
```
<hr />
## JS API

```javascript

// Open
$('#mySubModal').subModal('open');

// Close
$('#mySubModal').subModal('close');

// Toggle
$('#mySubModal').subModal('toggle');
```
<hr />
## Events

```javascript

// Before Modal is Shown
$('#mySubModal').on('beforeShow', fn);

// Modal Shown
$('#mySubModal').on('show', fn);

// Modal Closed
$('#mySubModal').on('hide', fn);
```

### Known Issues
Currently, there is a nasty overflow issue that may take a while to fix. Please reference the issues list.

### License

MIT, dawg.

<a href="https://twitter.com/grantmnz/status/316438440348622848"><img src="http://i.imgur.com/9IhCklp.jpg"></a>
