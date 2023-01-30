This is a demonstration of a bug with NextJS 13:

**When**

1. middleware is used
2. trailingSlash config is set to `true`
3. Using next/link to link to a [...params] file that uses getServerSideProps and ends with `.html`

**Result**

Page params are not passed to component properly.


**IMPORTANT**

This only happen with local non-prod development
