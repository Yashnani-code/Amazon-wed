pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Amazon-style website...'
                sh 'ls -la'
            }
        }

        stage('Test') {
            steps {
                echo 'Running website tests...'
                sh 'test -f index.html'
                sh 'test -f style.css'
                sh 'test -f script.js'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Website deployment stage completed.'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: Amazon-style website pipeline completed!'
        }

        failure {
            echo 'FAILED: Please check the Jenkins console log.'
        }
    }
}
