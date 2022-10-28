100.times do
	person = Person.create(first_name: Faker::Name.first_name,
	              last_name: Faker::Name.last_name,
	              birth_date: Faker::Date.birthday,
	              death_date: [Faker::Date.in_date_period, nil, nil, nil, nil].sample,
								gender: Faker::Gender.binary_type,
								email: Faker::Internet.email)
	primary = true
	[1,2,3].sample.times do
		person.phones.create(phone_number: Faker::PhoneNumber.cell_phone, phone_type: ['CELL', 'WORK', 'HOME'].sample, primary: primary)
		primary = false
	end
	primary = true
	[1,2].sample.times do
		person.addresses.create(address1: Faker::Address.street_address, address2: Faker::Address.secondary_address, city: Faker::Address.city, state: Faker::Address.state_abbr, zip_code: Faker::Address.zip_code, primary: primary)
		primary = false
	end
	[1,2].sample.times do
		person.careers.create(company_name: Faker::Company.name, industry: Faker::Company.industry, title: Faker::Job.title, date_started: [Faker::Date.in_date_period(year: 2018), Faker::Date.in_date_period(year: 2017), Faker::Date.in_date_period(year: 2016)].sample, date_ended: [Faker::Date.in_date_period, nil, nil, nil, nil].sample)
	end
end
