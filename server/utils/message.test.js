const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		let from = 'Jen';
		let text = 'Some message';
		let message = generateMessage(from, text);

		expect(typeof message.createdAt).toBe('number');
		expect(message).toInclude({ from, text });
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		let from = 'Brett';
		let latitude = 1234;
		let longitude = 5678;
		let url = 'https://www.google.com/maps?q=1234,5678';

		let message = generateLocationMessage(from, latitude, longitude);

		expect(typeof message.createdAt).toBe('number');
		expect(message).toInclude({from, url});
	});
});