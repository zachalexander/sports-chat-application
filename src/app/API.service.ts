/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateMessage: OnCreateMessageSubscription;
  onUpdateMessage: OnUpdateMessageSubscription;
  onDeleteMessage: OnDeleteMessageSubscription;
};

export type CreateMessageInput = {
  id?: string | null;
  channelID: string;
  author: string;
  body: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelMessageConditionInput = {
  channelID?: ModelIDInput | null;
  author?: ModelStringInput | null;
  body?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Message = {
  __typename: "Message";
  id: string;
  channelID: string;
  author: string;
  body: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateMessageInput = {
  id: string;
  channelID?: string | null;
  author?: string | null;
  body?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteMessageInput = {
  id: string;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  channelID?: ModelIDInput | null;
  author?: ModelStringInput | null;
  body?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection";
  items: Array<Message | null>;
  nextToken?: string | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  channelID?: ModelSubscriptionIDInput | null;
  author?: ModelSubscriptionStringInput | null;
  body?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionMessageFilterInput | null> | null;
  or?: Array<ModelSubscriptionMessageFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateMessageMutation = {
  __typename: "Message";
  id: string;
  channelID: string;
  author: string;
  body: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateMessageMutation = {
  __typename: "Message";
  id: string;
  channelID: string;
  author: string;
  body: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  channelID: string;
  author: string;
  body: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type GetMessageQuery = {
  __typename: "Message";
  id: string;
  channelID: string;
  author: string;
  body: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListMessagesQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    channelID: string;
    author: string;
    body: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type MessagesByChannelIDQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    channelID: string;
    author: string;
    body: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateMessageSubscription = {
  __typename: "Message";
  id: string;
  channelID: string;
  author: string;
  body: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateMessageSubscription = {
  __typename: "Message";
  id: string;
  channelID: string;
  author: string;
  body: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteMessageSubscription = {
  __typename: "Message";
  id: string;
  channelID: string;
  author: string;
  body: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateMessage(
    input: CreateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {
        createMessage(input: $input, condition: $condition) {
          __typename
          id
          channelID
          author
          body
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMessageMutation>response.data.createMessage;
  }
  async UpdateMessage(
    input: UpdateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<UpdateMessageMutation> {
    const statement = `mutation UpdateMessage($input: UpdateMessageInput!, $condition: ModelMessageConditionInput) {
        updateMessage(input: $input, condition: $condition) {
          __typename
          id
          channelID
          author
          body
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMessageMutation>response.data.updateMessage;
  }
  async DeleteMessage(
    input: DeleteMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<DeleteMessageMutation> {
    const statement = `mutation DeleteMessage($input: DeleteMessageInput!, $condition: ModelMessageConditionInput) {
        deleteMessage(input: $input, condition: $condition) {
          __typename
          id
          channelID
          author
          body
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMessageMutation>response.data.deleteMessage;
  }
  async GetMessage(id: string): Promise<GetMessageQuery> {
    const statement = `query GetMessage($id: ID!) {
        getMessage(id: $id) {
          __typename
          id
          channelID
          author
          body
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMessageQuery>response.data.getMessage;
  }
  async ListMessages(
    id?: string,
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListMessagesQuery> {
    const statement = `query ListMessages($id: ID, $filter: ModelMessageFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listMessages(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            channelID
            author
            body
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMessagesQuery>response.data.listMessages;
  }
  async MessagesByChannelID(
    channelID: string,
    createdAt?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<MessagesByChannelIDQuery> {
    const statement = `query MessagesByChannelID($channelID: ID!, $createdAt: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        messagesByChannelID(channelID: $channelID, createdAt: $createdAt, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            channelID
            author
            body
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      channelID
    };
    if (createdAt) {
      gqlAPIServiceArguments.createdAt = createdAt;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <MessagesByChannelIDQuery>response.data.messagesByChannelID;
  }
  OnCreateMessageListener(
    filter?: ModelSubscriptionMessageFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMessage">>
  > {
    const statement = `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
        onCreateMessage(filter: $filter) {
          __typename
          id
          channelID
          author
          body
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMessage">>
    >;
  }

  OnUpdateMessageListener(
    filter?: ModelSubscriptionMessageFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMessage">>
  > {
    const statement = `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
        onUpdateMessage(filter: $filter) {
          __typename
          id
          channelID
          author
          body
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMessage">>
    >;
  }

  OnDeleteMessageListener(
    filter?: ModelSubscriptionMessageFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMessage">>
  > {
    const statement = `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
        onDeleteMessage(filter: $filter) {
          __typename
          id
          channelID
          author
          body
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMessage">>
    >;
  }
}
