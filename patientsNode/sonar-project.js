var sonarqubeScanner = require('sonarqube-scanner').customScanner;
     sonarqubeScanner({
       serverUrl: 'https://oneit.wba.com/sonar',
       options : {
        'sonar.sources': 'routes,app.js',         
        'sonar.exclusions': 'utils',       
        'sonar.login' : 'lefdd-automation-w',
        'sonar.projectKey' : 'ICE_nodejs_waglobsbunodeboilerplt',
        'sonar.javascript.lcov.reportPaths' : 'test/unit/reports/coverage/lcov.info',
        'sonar.password' : 'YPHKXT9LnoaqW376Ib8Hw7qh'
       }   
     }, () => {});
