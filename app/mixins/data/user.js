import Ember from 'ember';

export default Ember.Mixin.create({
  user: Ember.Object.create({
    id: 1,
    header: Ember.Object.create({
      image_ids: Ember.A([
        { id: 1, desc: '' },
        { id: 2, desc: '' },
        { id: 3, desc: '' }
      ]),
      name: 'John Doe',
      profession: 'Profession Title',
    }),
    contact: Ember.Object.create({
      email: 'eaddress@main.com',
      phones: [{
        id: 1,
        desc: '+123 (45) 678 9123'
      },
      {
        id: 2,
        desc: null
      },
      {
        id: 3,
        desc: null
      }],
      address: {
        first_line: '12, Tempor Incididunt',
        second_line: 'Nostrud exercitation',
        third_line: 'ENO'
      },
    }),
    body: Ember.Object.create({
      profile: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      experiences: Ember.A([
        Ember.Object.create({
          id: 1,
          title: 'Company Name, Marketing Assistent',
          org_name: '',
          role: '',
          date: 'Jun 2019 - Jan 2021',
          dates: {
            from: '',
            to: '',
          },
          tasks: [
            {
              id: 1,
              desc: 'Excepteur sint occaecat cillum dolore eu fugiat nulla pariatur',
            },
            {
              id: 2,
              desc: 'Excepteur sint occaecat cillum dolore eu fugiat nulla pariatur',
            },
            {
              id: 3,
              desc: 'Excepteur sint occaecat cillum dolore eu fugiat nulla pariatur',
            }
          ]
        }),
        Ember.Object.create({
          id: 2,
          title: 'Company Name, Marketing Assistent',
          org_name: '',
          role: '',
          date: 'Jun 2021 - Jan 2025',
          dates: {
            from: '',
            to: '',
          },
          tasks: [
            {
              id: 4,
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
            },
            {
              id: 5,
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
            },
            {
              id: 6,
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
            }
          ]
        })
      ]),
      skills: Ember.A([
        Ember.Object.create({
          id: 1,
          desc: 'Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }),
        Ember.Object.create({
          id: 2,
          desc: 'Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }),
        Ember.Object.create({
          id: 3,
          desc: 'Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        })
      ]),
      eductions: Ember.A([
        Ember.Object.create({
          id: 1,
          title: 'Bacharelor in Marketing, University Name',
          date: '2014 - 2017'
        }),
        Ember.Object.create({
          id: 1,
          title: 'Bacharelor in Marketing, University Name',
          date: '2014 - 2017'
        })
      ]),
      references: Ember.A([
        Ember.Object.create({
          id: 1,
          name: 'Paul Miller',
          contact: '+123 (45) 678 9123'
        }),
        Ember.Object.create({
          id: 2,
          name: 'Anne Sum',
          contact: '+123 (45) 678 9123'
        })
      ]),
    })
  })
});
