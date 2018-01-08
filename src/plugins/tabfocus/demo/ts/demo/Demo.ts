/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import TabFocusPlugin from 'tinymce/plugins/tabfocus/Plugin';

declare let tinymce: any;

TabFocusPlugin();

tinymce.init({
  selector: "textarea.tinymce",
  plugins: "tabfocus code",
  toolbar: "code",
  skin_url: "../../../../../js/tinymce/skins/lightgray",
  height: 600
});