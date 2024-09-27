import { Assert, UnitTest } from '@hugemce/bedrock-client';

import * as Style from 'hugemce/sugar/impl/Style';

UnitTest.test('SizeTest', () => {
  const fakeElement = {
    style: {}
  };
  Assert.eq('', false, Style.isSupported(fakeElement as any));
});
