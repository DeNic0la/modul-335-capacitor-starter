import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Clipboard } = Plugins;
const { Toast } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  inputText: string;


  constructor() { }

  ngOnInit() {
  }


  copyInputTextToClipboard(){
    Clipboard.write({
      string: this.inputText
    }).then(() => {
      this.showToast("Text copied to clipboard!");
      this.inputText = "";
    })
  }

  async showToast(msg:string) {
    await Toast.show({
      text: msg
    });
  }

}
