pipeline {
    agent {
        docker {
            image 'sevencorners/windows-newman'
        }
    }
    stages {
        stage('Test') {
            steps {
                bat 'newman run postman\\test.postman_collection.json -e postman\\Development.postman_environment.json -g postman\\cobis-xsell.postman_globals.json -d postman\\dev-data.csv'
            }
        }
    }
}
