pipeline {
    agent {
        docker { image 'sevencorners/windows-newman' }
    }
    stages {
        stage('Test') {
            steps {
                bat 'newman -v'
            }
        }
    }
}