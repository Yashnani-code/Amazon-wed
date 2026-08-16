pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'YOUR_GITHUB_REPOSITORY_URL'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t amazon:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    docker stop amazon || true
                    docker rm amazon || true
                    docker run -d --name amazon -p 3000:80 amazon:latest
                '''
            }
        }

    }
}
