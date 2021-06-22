pipeline {
    agent {
        docker {
            image 'sevencorners/windows-newman'
            args '.:/tmp'
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
