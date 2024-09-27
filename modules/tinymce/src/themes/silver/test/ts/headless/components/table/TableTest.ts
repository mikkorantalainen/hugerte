import { ApproxStructure, Assertions } from '@hugemce/agar';
import { GuiFactory, TestHelpers } from '@hugemce/alloy';
import { describe, it } from '@hugemce/bedrock-client';

import { renderTable } from 'tinymce/themes/silver/ui/dialog/Table';

import TestProviders from '../../../module/TestProviders';

describe('headless.tinymce.themes.silver.components.table.TableTest', () => {
  const hook = TestHelpers.GuiSetup.bddSetup((_store, _doc, _body) => GuiFactory.build(
    renderTable({
      header: [ 'one', 'two', 'three' ],
      cells: [
        [ 'a', 'b', 'c' ],
        [ 'd', 'e', 'f' ]
      ]
    }, TestProviders)
  ));

  it('Check basic structure', () => {
    Assertions.assertStructure(
      'Assert table structure',
      ApproxStructure.fromHtml((
        '<table class="tox-dialog__table">' +
        '<thead>' +
        '<tr>' +
        '<th>one</th>' +
        '<th>two</th>' +
        '<th>three</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '<tr>' +
        '<td>a</td>' +
        '<td>b</td>' +
        '<td>c</td>' +
        '</tr>' +
        '<tr>' +
        '<td>d</td>' +
        '<td>e</td>' +
        '<td>f</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>'
      )),
      hook.component().element
    );
  });
});
