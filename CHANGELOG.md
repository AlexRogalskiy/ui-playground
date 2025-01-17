# [1.0.0-beta.6](https://github.com/exadel-inc/ui-playground/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2021-07-30)


### Bug Fixes

* remove webpack noParse configuration ([ce0dc38](https://github.com/exadel-inc/ui-playground/commit/ce0dc382ffc4cc28a29e62ffad24aed0eeaeaef7))

# [1.0.0-beta.5](https://github.com/exadel-inc/ui-playground/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2021-07-29)


### Bug Fixes

* add es5 output ([96fabbb](https://github.com/exadel-inc/ui-playground/commit/96fabbb8fe6739010589c303d8f809a53a628e44))
* fix webpack.config.prod ([361cfa9](https://github.com/exadel-inc/ui-playground/commit/361cfa97c9dc56849be71ff84ae406920fd6d60c))

# [1.0.0-beta.4](https://github.com/exadel-inc/ui-playground/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2021-07-29)


### Bug Fixes

* add js-beautify types to dependencies, specify npm css path ([4477ad8](https://github.com/exadel-inc/ui-playground/commit/4477ad835bde001419b445e37e7c3a1bfda5df2f))

# [1.0.0-beta.3](https://github.com/exadel-inc/ui-playground/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2021-07-27)


### Bug Fixes

* fix path to typing file in package.json ([fe9e2f7](https://github.com/exadel-inc/ui-playground/commit/fe9e2f7268ba157eef726ec3d47b362b803fc18c))


### Features

* move UIP options to attributes, rework uip-editor themes control ([7942a5a](https://github.com/exadel-inc/ui-playground/commit/7942a5ac2a62a64632c1f9b53a6f2478fafb03b4)), closes [#122](https://github.com/exadel-inc/ui-playground/issues/122)

# [1.0.0-beta.2](https://github.com/exadel-inc/ui-playground/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2021-07-20)


### Bug Fixes

* add src (temporary) and README.md to npm package ([7eccbc4](https://github.com/exadel-inc/ui-playground/commit/7eccbc457f129e47896e852cf2d6c1dc1da7f514))
* **demo-content:** pr fix ([e1daa8d](https://github.com/exadel-inc/ui-playground/commit/e1daa8d268c5243fef9e97dafaca3f093452184e))
* **events:** stop playground events bubbling after processing ([a6405dd](https://github.com/exadel-inc/ui-playground/commit/a6405dddfb034f604da9078b947904c7f8c954c9))
* **options:** fix displaying active options ([12abac8](https://github.com/exadel-inc/ui-playground/commit/12abac8b570538939b012230a2e0da66a2fdc4bd))
* **options:** fix options layout ([1169f4a](https://github.com/exadel-inc/ui-playground/commit/1169f4a91431ea48d2d0e4f9d8f135fbc07eca38))
* **style:** apply styles for child uip elements only ([19107b4](https://github.com/exadel-inc/ui-playground/commit/19107b4c4b0971c8cd7c1355e668040a6ba5e0be))
* **uip-bool-setting:** fix bool setting styles ([bbe3be6](https://github.com/exadel-inc/ui-playground/commit/bbe3be6277e9fdd2d977ba7e66b6ee85ed1a21d3))
* **uip-preview:** fix clearing innerHTML ([d5f7159](https://github.com/exadel-inc/ui-playground/commit/d5f7159d7e459e0ce7a5799b9581c991ed208066))
* **uip-setting:** fix creating multiple setting's fields ([1e2b816](https://github.com/exadel-inc/ui-playground/commit/1e2b8167ad3af204dc7de1240b4391b1513ddb42))


### Features

* **demo-content:** add more demo content ([88cf696](https://github.com/exadel-inc/ui-playground/commit/88cf69669a03b4caae39e479fbb417790c3ba537))
* **uip-elements:** reduce token-list-utils methods complexity ([e60276d](https://github.com/exadel-inc/ui-playground/commit/e60276d78ef3aa8ab83cc4b5b91a95b587bbf704))
* **uip-elements:** tech review changes ([ea2f084](https://github.com/exadel-inc/ui-playground/commit/ea2f084d10d0d02188ca89f290f9d53ea913fc49))
* **uip-model:** add ability to identify last state modifier; add model shorthand to uip-plugin ([bdd846a](https://github.com/exadel-inc/ui-playground/commit/bdd846aa1a4229f01070497c61f27ddfeb0a8f51))
* **uip-model:** merge setAttribute & transformAttribute methods ([c192ae2](https://github.com/exadel-inc/ui-playground/commit/c192ae2b81fdeb85e7aefc93afc3c38995591af1))
* change fired markup instance ([5c8984f](https://github.com/exadel-inc/ui-playground/commit/5c8984f2fd3e06058c0f73a476833bd81f2fdc69))
* state-model as observable ([48caeeb](https://github.com/exadel-inc/ui-playground/commit/48caeeb3af3e5396bacc35270d7ef7a1a992f31d))
* **uip-preview:** add an ability to center preview content ([0491d8e](https://github.com/exadel-inc/ui-playground/commit/0491d8e2e9144192034e4f6e491182cbbc1e1e78))

# 1.0.0-beta.1 (2021-05-20)


### Bug Fixes

* less build ([08d78d1](https://github.com/exadel-inc/ui-playground/commit/08d78d197f1de94fac30d9ad533dc7011442e58a))
* **array-utils:** rename ArrayUtils to TokenListUtils ([404cfcd](https://github.com/exadel-inc/ui-playground/commit/404cfcddebed1b6817617b2fd7b9ec99b34f944b))
* **editor:** replace brace with ace-builds dependency ([7f9d9fd](https://github.com/exadel-inc/ui-playground/commit/7f9d9fd334a40c25483660c1c6dbd049f639a872))
* **select-setting:** fix ESLSelect display ([573b546](https://github.com/exadel-inc/ui-playground/commit/573b546c7e8e0b5c5ed9b30594bfe789768aceaa))
* **settings:** remove unused class settings ([bb208c1](https://github.com/exadel-inc/ui-playground/commit/bb208c1c855e2745070c546ff6e2dccbd2dee22f))
* **uip-bool-setting:** fix bool setting inconsistent state ([3b551e9](https://github.com/exadel-inc/ui-playground/commit/3b551e9a453374c0262a478d8be32408e0f53bc7))
* **uip-editor:** fix bug with horizontal scroll ([62efbf5](https://github.com/exadel-inc/ui-playground/commit/62efbf5603f0f7d708b5f284bf74515a1b4a035f))
* **uip-plugin:** set right 'state:change' listener ([e3755f1](https://github.com/exadel-inc/ui-playground/commit/e3755f1d0902844c4244e2d361e52e8c6bc2735c))
* **uip-select-setting:** fix esl-select styles ([5ecc868](https://github.com/exadel-inc/ui-playground/commit/5ecc868083846981471a55c456244816bd80a0e3))
* **uip-setting:** fix adding extra whitespace when changing value ([9d47b91](https://github.com/exadel-inc/ui-playground/commit/9d47b91f68616f998322bae9422105148ba7ac13))
* **uip-setting:** fix labels styles ([c877198](https://github.com/exadel-inc/ui-playground/commit/c877198f301e8384aeb6cbad7f5b4f19f990f7bc))
* **uip-setting:** js-ling fix ([85caef2](https://github.com/exadel-inc/ui-playground/commit/85caef27ce13705c8c859e944047472e7334c001))
* **uip-setting:** lint fix ([8520c68](https://github.com/exadel-inc/ui-playground/commit/8520c68171089e1601a197c425a1f83f7f2d236e))
* **uip-setting:** pr fix ([25a3e65](https://github.com/exadel-inc/ui-playground/commit/25a3e6525d07930bf272d819c452323a758f4acd))
* **uip-setting:** pr fix ([0c578ad](https://github.com/exadel-inc/ui-playground/commit/0c578ad0154a5f411db6d902a07251b748046803))
* **uip-setting:** prioritize setting's target over settings target ([1702b7a](https://github.com/exadel-inc/ui-playground/commit/1702b7aeadf187edb3e2c610c953103d694944c0))
* **uip-setting:** rename inconsistency message ([6a5dfb7](https://github.com/exadel-inc/ui-playground/commit/6a5dfb7a243575b3b5263481fa8f7567cecf494f))
* **uip-settings:** fix settings display ([803256b](https://github.com/exadel-inc/ui-playground/commit/803256b44b663aa7114b73b48de38770c59d0ae2))
* replace double quotes with single quotes ([b52a735](https://github.com/exadel-inc/ui-playground/commit/b52a735579008a3ba7cec5964877d9eaf029f0b7))


### Features

* **dependencies:** update esl version ([97eabdc](https://github.com/exadel-inc/ui-playground/commit/97eabdcfd334197217d6e809f87f319655c30544))
* **dependencies:** update esl version ([a78c9b8](https://github.com/exadel-inc/ui-playground/commit/a78c9b8c75a887e935fbd5c773a64c4110e5b2bf))
* **settings:** create state model class ([191afe7](https://github.com/exadel-inc/ui-playground/commit/191afe7c06199ecc084eb967db76250c5cac20df))
* **state-model:** add setting/getting attributes from root ([4966f7d](https://github.com/exadel-inc/ui-playground/commit/4966f7d7732c61ccb684853e67461475fb2992e7))
* **uip-bool-setting:** implement uip-setting interface ([118e2e4](https://github.com/exadel-inc/ui-playground/commit/118e2e41576a782807a291f4adc1b2ae86948f7c))
* **uip-editor:** make wrapping on reaching editor's width by default ([95e8647](https://github.com/exadel-inc/ui-playground/commit/95e8647f46255c23da34b571e5ae7fba3d30a388))
* **uip-root:** move StateModel from settings to root ([259ecae](https://github.com/exadel-inc/ui-playground/commit/259ecae5cf29ee7bb3e2c1ae1fecdfe9b5236c77))
* **uip-select-setting:** implement uip-setting interface ([98a311f](https://github.com/exadel-inc/ui-playground/commit/98a311fe2b1508638977885f12960500cb2a8538))
* **uip-setting:** add message to setInconsistency() ([a2be1da](https://github.com/exadel-inc/ui-playground/commit/a2be1da2d23c72a0bba1fb5bd5de0730b7cb9633))
* **uip-setting:** add rendering settings labels ([11a087e](https://github.com/exadel-inc/ui-playground/commit/11a087ed66b91b263645dd3eea4042e934bb2f23))
* **uip-setting:** create array-utils class ([5f66996](https://github.com/exadel-inc/ui-playground/commit/5f669964f7a632283c6d78ab41d2124e63e7e4e6))
* **uip-setting:** create demo settings ([d05ecac](https://github.com/exadel-inc/ui-playground/commit/d05ecac43132d0894ac02c69f7f49daaa1f12bc1))
* **uip-setting:** eslint fix ([d230de1](https://github.com/exadel-inc/ui-playground/commit/d230de13624c70bfed4e00e56d70cf94fa709f97))
* **uip-setting:** implement applyTo/updateFrom ([50badf4](https://github.com/exadel-inc/ui-playground/commit/50badf4ab83ee8be0b4e74d84d0c0a81f96d5c39))
* **uip-setting:** implement new setInconsistency() logic ([1b7a9b7](https://github.com/exadel-inc/ui-playground/commit/1b7a9b71a2f10d9d4873faeaaedcdd5ba9fd1ab8))
* **uip-setting:** implement setInconsistency for select setting ([6f3883c](https://github.com/exadel-inc/ui-playground/commit/6f3883c2c375681a4f7cab31cca8fc37ca52c057))
* **uip-setting:** move $field initiation in a separate method ([85e4498](https://github.com/exadel-inc/ui-playground/commit/85e44987dc7d2b549fa772fd8c84ad380a2b0752))
* **uip-setting:** setting interface ([a9eacf3](https://github.com/exadel-inc/ui-playground/commit/a9eacf39d148e2d5c1fd00d7267990a52a4e4090))
* **uip-setting:** setting interface methods ([e682aab](https://github.com/exadel-inc/ui-playground/commit/e682aab4add1987159c9cdd7a5be267bce2f58dc))
* **uip-settings:** add UIPModel, apply new setting methods to handle changes ([ad46e3b](https://github.com/exadel-inc/ui-playground/commit/ad46e3b6971a40a007c31c20e801af5bccc401fb))
* **uip-settings:** reorganize uip-settings to the new model ([61cd265](https://github.com/exadel-inc/ui-playground/commit/61cd2655249ef50a4f3ae94758f2e2da4a77fa7c))
* ie11 support and autoprefixer config ([4da38bb](https://github.com/exadel-inc/ui-playground/commit/4da38bbef5d8e38044658214a6c75360d3413d01))
* introduce UIPOptions component and html refactoring ([a68a9d0](https://github.com/exadel-inc/ui-playground/commit/a68a9d0d70ffb670c67882f488200c5d996b5c52))
* **uip-text-setting:** implement uip-setting interface ([6852aa6](https://github.com/exadel-inc/ui-playground/commit/6852aa6c1348e1453e295615fa5620008e577af6))
