const test = require('ava');
const boxen = require('..');

test('title option works', t => {
	const box = boxen('foo', {
		title: 'title'
	});

	t.snapshot(box);
});

test('title align left', t => {
	const box = boxen('foo bar foo bar', {
		title: 'title',
		titleAlignment: 'left'
	});

	t.snapshot(box);
});

test('title align center', t => {
	const box = boxen('foo bar foo bar', {
		title: 'title',
		titleAlignment: 'center'
	});

	t.snapshot(box);
});

test('title align right', t => {
	const box = boxen('foo bar foo bar', {
		title: 'title',
		titleAlignment: 'right'
	});

	t.snapshot(box);
});

test('long title expands box', t => {
	const box = boxen('foo', {
		title: 'very long title'
	});

	t.snapshot(box);
});
