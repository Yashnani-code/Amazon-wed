pipeline {
    agent any

    stages {

        stage('Git Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Yashnani-code/Amazon-wed.git'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t amazon:latest .'
            }
        }

        stage('Deploy to Container') {
            steps {
                sh 'docker rm -f amazon || true'
                sh 'docker run -d --name amazon -p 3000:3000 amazon:latest'
            }
        }

        stage('Check Container') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
