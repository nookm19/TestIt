Feature('Тест-автоматизаторов');

Scenario('test entry', (I) => {
	I.amOnPage('https://vk.com');
	I.click('Ваше имя');
	I.fillField('Ваше имя', 'somename123');
	I.fillField('Ваша фамилия', 'sername2135');
	I.fillField('#container1 > table > tbody > tr > td.selector > input.selector_input.selected', '5');
	I.fillField('#container2 > table > tbody > tr > td.selector > input.selector_input.selected', '5');
	I.fillField('#ij_birthdate_row > div.ij_byear', '1995');
	I.click('Продолжить регистрацию');
});
