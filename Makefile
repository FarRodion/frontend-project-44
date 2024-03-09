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

asciinema-rec:
	asciinema rec prime.cast

asciinema-upload:
	asciinema upload prime.cast

brain-games: 
	node bin/brain-games.js	

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gsd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js

