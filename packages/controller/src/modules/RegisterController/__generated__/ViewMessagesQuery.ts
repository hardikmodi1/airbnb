

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewMessagesQuery
// ====================================================

export interface ViewMessagesQuery_messages_user {
  id: string;
  email: string;
}

export interface ViewMessagesQuery_messages {
  text: string;
  user: ViewMessagesQuery_messages_user;
  listingId: string;
}

export interface ViewMessagesQuery {
  messages: ViewMessagesQuery_messages[];
}

export interface ViewMessagesQueryVariables {
  listingId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

// 
export interface MessageInput {
  text: string;
  listingId: string;
}

// 
export interface UpdateListingInput {
  name?: string | null;
  picture?: any | null;
  pictureUrl?: string | null;
  category?: string | null;
  description?: string | null;
  price?: number | null;
  beds?: number | null;
  guests?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  amenities?: string[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================