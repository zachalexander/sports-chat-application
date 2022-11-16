import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { APIService } from '../API.service';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild(IonContent) content: any;
  username = 'Jane';
  messages: any;


  constructor(
    private api: APIService
  ) {} 

  ngOnInit(): void {
    this.listMessages();
    this.onCreateMessage();
  }

  ionViewDidEnter() {
    console.log(this.content)
    this.content.scrollToBottom(300);
  }

  listMessages(): void {
    this.api.MessagesByChannelID('1').then((val) => {
      console.log(val);
      this.messages = val.items;
    });
  }

  send(event:any, inputElement: any): void {

    event.preventDefault();
    event.stopPropagation();
    const input = {
      channelID: '1',
      author: this.username.trim(),
      body: inputElement.value.trim()
    };
    this.api.CreateMessage(input).then((val) => {
      console.log('Send Message Success =>', val);
      inputElement.value = '';
    });
  }

  onCreateMessage(): void {
    this.api.OnCreateMessageListener().subscribe(
      {
        next: (val: any) => {
          console.log(val);
          console.log(this.messages)
          this.messages.push(val.value.data.onCreateMessage);
        }
      }
    );
  }

}
