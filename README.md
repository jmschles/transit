San Francisco Bay Area mass transit app providing real-time departure data.  Focus is on a Rails API and Backbone.js front end; the project is currently very light on presentation and interactivity.

Geolocation is not yet implemented, but is on the todo list.

To run:
```
git clone git@github.com:jmschles/transit.git
cd transit
bundle install
rake db:migrate
rake transit_data:populate
rails server
```

Enjoy!