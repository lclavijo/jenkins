pipeline {
    agent {
        docker {
            image 'sevencorners/windows-newman'
        }
    }
    stages {
        stage('Test') {
            steps {
                bat 'dir'
                bat 'newman -v'
            }
        }
    }
}
