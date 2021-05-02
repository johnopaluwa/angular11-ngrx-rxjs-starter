# YovaFrontend

A small fun project.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Notes
1. Found it  difficult parsing cet time as most javascript libraries were not able to do it. I will need some more research here. So I changed the cet to gmt to make my life a bit easier
2. The `notification.json` items did not contain ids. This is made the work a harder. I was able to work with select unique objects thou by comparing all the properties. I will assume ina productive system they should be unique identifier.
3. I assumed the app is authenticated and thus was not for using route guards.
4. In this design it was assumed that the notifications were not comming real time and thus was no need handling that senerio.
5. It was also assumed that all call to the server i.e in this case the `notification.json` will not fail and thus was no need handinling the error senerio. Actually the setup for handling the error was coded in the logic but was implemented in the html. Check the `reportprogress` object where ever user.
6. It was assumed that all call to thed server was very fast and thus was no need handling the loading in the html. The logic for the loading progress was although implemeted. Check the `reportprogress` object where ever user.

