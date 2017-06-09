install:
	npm install

lint:
	npm run eslint -- src

test:
	npm run build
	npm run test
