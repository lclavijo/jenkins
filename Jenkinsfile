pipeline {
    agent {
        docker {
            image 'sevencorners/windows-newman'
            args '-v /:/tmp'
        }
    }
    stages {
        stage('Test') {
            steps {
                bat 'dir /tmp'
                bat 'newman -v'
            }
        }
    }
}
