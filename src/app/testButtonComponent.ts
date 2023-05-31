import {Component} from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
    <div class="navigation-bar">
        <div class="button-container">
            <button (click)="count = count + increment">Add one</button>
            <button (click)="count = 0">Reset</button>
            <button (click)="count = count - increment">Remove one</button>
        </div>
    </div>
    <div class="main-layout">
        <span class="count">{{ count }}</span>
    </div>
    `,
    styles: [
    `
    .navigation-bar {
        display: block;
        height: 5vh;
        background-color: #ffccc0;

    }
    .main-layout {
        display: flex;
        height: 70vh;
        /*background-color: #41daff;*/
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
    }

    .count {
        display: flex; /* Apply flex properties */
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
        width: 100px;
        height: 100px;
        font-size: 30vh;
    }

    button {
        width: 100vh;
        height: 5vh;
    }

    .button-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center; /* Center horizontally */
    }

    button {
        font-weight: bold;
        margin-bottom: 8px;
    }
    .count {
        text-align: center;
    }
    `
    ],
})

export class testButton {
    count = 0
    increment = 1
}
