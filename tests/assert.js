import { createRequire } from 'module';
const require = createRequire( import.meta.url );
const assert = require( 'assert' );

export default assert;
export { assert };