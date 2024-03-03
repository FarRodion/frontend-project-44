install:
		npm ci

publish: 
		npm publish --dry-run

link:
	 npm link

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

brain-games: 
	node bin/brain-games.js	

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

