const routeData = {
    chinatown: {
        title: "SMU to Chinatown",
        shelterPercentage: "75%",
        walkingTime: "15 minutes",
        mainImage: "https://via.placeholder.com/800x400?text=SMU+to+Chinatown+Route",
        steps: [
            {
                image: "https://via.placeholder.com/800x300?text=Step+1",
                instruction: "Exit SMU School of Computing/Information Systems"
            },
            {
                image: "https://via.placeholder.com/800x300?text=Step+2",
                instruction: "Walk along the covered walkway towards Middle Road"
            },
            {
                image: "https://via.placeholder.com/800x300?text=Step+3",
                instruction: "Turn right at Middle Road and follow the sheltered path"
            }
        ]
    },
    dhoby: {
        title: "SMU to Dhoby Ghaut MRT",
        shelterPercentage: "90%",
        walkingTime: "8 minutes",
        mainImage: "https://via.placeholder.com/800x400?text=SMU+to+Dhoby+Ghaut+Route",
        steps: [
            {
                image: "https://via.placeholder.com/800x300?text=Step+1",
                instruction: "Exit SMU through the underground concourse"
            },
            {
                image: "https://via.placeholder.com/800x300?text=Step+2",
                instruction: "Follow the underground path to Dhoby Ghaut MRT"
            }
        ]
    },
    bugis: {
        title: "SMU to Bugis Junction",
        shelterPercentage: "60%",
        walkingTime: "12 minutes",
        mainImage: "https://via.placeholder.com/800x400?text=SMU+to+Bugis+Junction+Route",
        steps: [
            {
                image: "https://via.placeholder.com/800x300?text=Step+1",
                instruction: "Exit SMU from the main entrance"
            },
            {
                image: "https://via.placeholder.com/800x300?text=Step+2",
                instruction: "Walk along Bras Basah Road"
            },
            {
                image: "https://via.placeholder.com/800x300?text=Step+3",
                instruction: "Cross at the traffic light towards Bugis Junction"
            }
        ]
    }
};

document.getElementById('routeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    if (destination) {
        displayRoute(destination);
    }
});

function displayRoute(destination) {
    const route = routeData[destination];
    const routeDisplay = document.getElementById('routeDisplay');
    const routeTitle = document.getElementById('routeTitle');
    const shelterPercentage = document.getElementById('shelterPercentage');
    const walkingTime = document.getElementById('walkingTime');
    const routeImages = document.getElementById('routeImages');

    routeTitle.textContent = route.title;
    shelterPercentage.textContent = route.shelterPercentage;
    walkingTime.textContent = route.walkingTime;

    // Clear previous route images
    routeImages.innerHTML = '';

    // Add main route image
    const mainImage = document.createElement('img');
    mainImage.src = route.mainImage;
    mainImage.alt = route.title;
    mainImage.className = 'route-image';
    routeImages.appendChild(mainImage);

    // Add step-by-step instructions
    route.steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'step';

        const stepImage = document.createElement('img');
        stepImage.src = step.image;
        stepImage.alt = `Step ${index + 1}`;

        const stepInstruction = document.createElement('p');
        stepInstruction.textContent = `${index + 1}. ${step.instruction}`;

        stepDiv.appendChild(stepImage);
        stepDiv.appendChild(stepInstruction);
        routeImages.appendChild(stepDiv);
    });

    routeDisplay.style.display = 'block';
}