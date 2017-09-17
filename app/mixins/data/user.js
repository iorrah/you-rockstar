import Ember from 'ember';

// Implement Ember Mirage:
// http://www.ember-cli-mirage.com/docs/v0.3.x/installation/

export default Ember.Mixin.create({
  user: Ember.Object.create({
    id: 1,
    header: Ember.Object.create({
      image_ids: Ember.A([
        { id: 1, desc: '' },
        { id: 2, desc: '' },
        { id: 3, desc: '' }
      ]),
      first_name: 'Philip',
      last_name: 'Connor',
      name: 'Philip Connor',
      profession: 'Marketing Assistant',
    }),
    contact: Ember.Object.create({
      email: 'philipconnor@mail.com',
      phones: [{
        id: 1,
        desc: '(872) 871 9271'
      },
      {
        id: 2,
        desc: '(872) 871 9271'
      },
      {
        id: 3,
        desc: '(872) 871 9271'
      }],
      address: {
        first_line: '55, San Mary Lane',
        second_line: '44, San Mary Lane',
        third_line: '33, San Mary Lane'
      },
    }),
    body: Ember.Object.create({
      profile: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      experiences: Ember.A([
        Ember.Object.create({
          id: 1,
          org_name: '13 Monkeys',
          role: 'Marketing Assistent',
          date: 'Jun 2019 - Jan 2020',
          dates: {
            from: 'Jun 2019',
            to: 'Jan 2020',
          },
          tasks: [
            {
              id: 1,
              desc: 'Maintained and organized numerous office files',
            },
            {
              id: 2,
              desc: 'Organized and maintained numerous office files',
            },
            {
              id: 3,
              desc: 'Numerous office files have been maintained and organized',
            }
          ]
        }),
        Ember.Object.create({
          id: 2,
          org_name: '13 Monkeys',
          role: 'Marketing Assistent',
          date: 'Jun 2019 - Jan 2020',
          dates: {
            from: 'Jun 2019',
            to: 'Jan 2020',
          },
          tasks: [
            {
              id: 4,
              desc: 'Maintained and organized numerous office files',
            },
            {
              id: 5,
              desc: 'Organized and maintained numerous office files',
            },
            {
              id: 6,
              desc: 'Numerous office files have been maintained and organized',
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
          inst_name: 'San Diego university',
          course: 'Bacharelor in Marketing',
          date: 'Class of 2018',
          dates: {
            from: 'Class of 2018',
            to: ''
          }
        })
      ])
    })
  })
});
