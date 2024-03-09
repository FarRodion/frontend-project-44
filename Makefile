install:
		npm ci
#Право на запуск файла с корневой директории
chmod:
	chmod +x bin/brain-gcd.js 

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

brain-gsd:
	node bin/brain-gcd.js

