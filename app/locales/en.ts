import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
// if you are adding a new translation, please use PartialLocaleType instead of LocaleType

const isApp = !!getClientConfig()?.isApp;
const en: {
  WIP: string;
  Error: { Unauthorized: string };
  Auth: {
    Return: string;
    Title: string;
    Tips: string;
    SubTips: string;
    Input: string;
    Confirm: string;
    Later: string;
    SaasTips: string;
    TopTips: string
  };
  ChatItem: { ChatItemCount: (count: number) => string };
  Chat: {
    SubTitle: (count: number) => string;
    EditMessage: { Title: string; Topic: { Title: string; SubTitle: string } };
    Actions: {
      ChatList: string;
      CompressedHistory: string;
      Export: string;
      Copy: string;
      Stop: string;
      Retry: string;
      Pin: string;
      PinToastContent: string;
      PinToastAction: string;
      Delete: string;
      Edit: string;
      FullScreen: string;
      RefreshTitle: string;
      RefreshToast: string;
      Speech: string;
      StopSpeech: string
    };
    Commands: { new: string; newm: string; next: string; prev: string; clear: string; fork: string; del: string };
    InputActions: {
      Stop: string;
      ToBottom: string;
      Theme: { auto: string; light: string; dark: string };
      Prompt: string;
      Masks: string;
      Clear: string;
      Settings: string;
      UploadImage: string
    };
    Rename: string;
    Typing: string;
    Input: (submitKey: string) => string;
    Send: string;
    StartSpeak: string;
    StopSpeak: string;
    Config: { Reset: string; SaveAs: string };
    IsContext: string;
    ShortcutKey: {
      Title: string;
      newChat: string;
      focusInput: string;
      copyLastMessage: string;
      copyLastCode: string;
      showShortcutKey: string;
      clearContext: string
    }
  };
  Export: {
    Title: string;
    Copy: string;
    Download: string;
    MessageFromYou: string;
    MessageFromChatGPT: string;
    Share: string;
    Format: { Title: string; SubTitle: string };
    IncludeContext: { Title: string; SubTitle: string };
    Steps: { Select: string; Preview: string };
    Image: { Toast: string; Modal: string };
    Artifacts: { Title: string; Error: string }
  };
  Select: { Search: string; All: string; Latest: string; Clear: string };
  Memory: { Title: string; EmptyContent: string; Send: string; Copy: string; Reset: string; ResetConfirm: string };
  Home: { NewChat: string; DeleteChat: string; DeleteToast: string; Revert: string };
  Settings: {
    Title: string;
    SubTitle: string;
    ShowPassword: string;
    Danger: {
      Reset: { Title: string; SubTitle: string; Action: string; Confirm: string };
      Clear: { Title: string; SubTitle: string; Action: string; Confirm: string }
    };
    Lang: { Name: string; All: string };
    Avatar: string;
    FontSize: { Title: string; SubTitle: string };
    FontFamily: { Title: string; SubTitle: string; Placeholder: string };
    InjectSystemPrompts: { Title: string; SubTitle: string };
    InputTemplate: { Title: string; SubTitle: string };
    Update: {
      Version: (x: string) => string;
      IsLatest: string;
      CheckUpdate: string;
      IsChecking: string;
      FoundUpdate: (x: string) => string;
      GoToUpdate: string;
      Success: string;
      Failed: string
    };
    SendKey: string;
    Theme: string;
    TightBorder: string;
    SendPreviewBubble: { Title: string; SubTitle: string };
    AutoGenerateTitle: { Title: string; SubTitle: string };
    Sync: {
      CloudState: string;
      NotSyncYet: string;
      Success: string;
      Fail: string;
      Config: {
        Modal: { Title: string; Check: string };
        SyncType: { Title: string; SubTitle: string };
        Proxy: { Title: string; SubTitle: string };
        ProxyUrl: { Title: string; SubTitle: string };
        WebDav: { Endpoint: string; UserName: string; Password: string };
        UpStash: { Endpoint: string; UserName: string; Password: string }
      };
      LocalState: string;
      Overview: (overview: any) => string;
      ImportFailed: string
    };
    Mask: { Splash: { Title: string; SubTitle: string }; Builtin: { Title: string; SubTitle: string } };
    Prompt: {
      Disable: { Title: string; SubTitle: string };
      List: string;
      ListCount: (builtin: number, custom: number) => string;
      Edit: string;
      Modal: { Title: string; Add: string; Search: string };
      EditModal: { Title: string }
    };
    HistoryCount: { Title: string; SubTitle: string };
    CompressThreshold: { Title: string; SubTitle: string };
    Usage: {
      Title: string;
      SubTitle(used: any, total: any): string;
      IsChecking: string;
      Check: string;
      NoAccess: string
    };
    Access: {
      SaasStart: { Title: string; Label: string; SubTitle: string; ChatNow: string };
      AccessCode: { Title: string; SubTitle: string; Placeholder: string };
      CustomEndpoint: { Title: string; SubTitle: string };
      Provider: { Title: string; SubTitle: string };
      OpenAI: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string }
      };
      Azure: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string };
        ApiVerion: { Title: string; SubTitle: string }
      };
      Anthropic: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string };
        ApiVerion: { Title: string; SubTitle: string }
      };
      Baidu: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        SecretKey: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string }
      };
      Tencent: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        SecretKey: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string }
      };
      ByteDance: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string }
      };
      Alibaba: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string }
      };
      Moonshot: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string }
      };
      DeepSeek: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string }
      };
      XAI: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string }
      };
      ChatGLM: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string }
      };
      SiliconFlow: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string }
      };
      Stability: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string }
      };
      Iflytek: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        ApiSecret: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string }
      };
      CustomModel: { Title: string; SubTitle: string };
      Google: {
        ApiKey: { Title: string; SubTitle: string; Placeholder: string };
        Endpoint: { Title: string; SubTitle: string };
        ApiVersion: { Title: string; SubTitle: string };
        GoogleSafetySettings: { Title: string; SubTitle: string }
      }
    };
    Model: string;
    CompressModel: { Title: string; SubTitle: string };
    Temperature: { Title: string; SubTitle: string };
    TopP: { Title: string; SubTitle: string };
    MaxTokens: { Title: string; SubTitle: string };
    PresencePenalty: { Title: string; SubTitle: string };
    FrequencyPenalty: { Title: string; SubTitle: string };
    TTS: {
      Enable: { Title: string; SubTitle: string };
      Autoplay: { Title: string; SubTitle: string };
      Model: string;
      Voice: { Title: string; SubTitle: string };
      Speed: { Title: string; SubTitle: string };
      Engine: string
    };
    Realtime: {
      Enable: { Title: string; SubTitle: string };
      Provider: { Title: string; SubTitle: string };
      Model: { Title: string; SubTitle: string };
      ApiKey: { Title: string; SubTitle: string; Placeholder: string };
      Azure: { Endpoint: { Title: string; SubTitle: string }; Deployment: { Title: string; SubTitle: string } };
      Temperature: { Title: string; SubTitle: string }
    }
  };
  Store: {
    DefaultTopic: string;
    BotHello: string;
    Error: string;
    Prompt: { History: (content: string) => string; Topic: string; Summarize: string }
  };
  Copy: { Success: string; Failed: string };
  Download: { Success: string; Failed: string };
  Context: { Toast: (x: any) => string; Edit: string; Add: string; Clear: string; Revert: string };
  Discovery: { Name: string };
  Mcp: { Name: string };
  FineTuned: { Sysmessage: string };
  SearchChat: {
    Name: string;
    Page: {
      Title: string;
      Search: string;
      NoResult: string;
      NoData: string;
      Loading: string;
      SubTitle: (count: number) => string
    };
    Item: { View: string }
  };
  Plugin: {
    Name: string;
    Page: { Title: string; SubTitle: (count: number) => string; Search: string; Create: string; Find: string };
    Item: { Info: (count: number) => string; View: string; Edit: string; Delete: string; DeleteConfirm: string };
    Auth: {
      None: string;
      Basic: string;
      Bearer: string;
      Custom: string;
      CustomHeader: string;
      Token: string;
      Proxy: string;
      ProxyDescription: string;
      Location: string;
      LocationHeader: string;
      LocationQuery: string;
      LocationBody: string
    };
    EditModal: {
      Title: (readonly: boolean) => string;
      Download: string;
      Auth: string;
      Content: string;
      Load: string;
      Method: string;
      Error: string
    }
  };
  Mask: {
    Name: string;
    Page: { Title: string; SubTitle: (count: number) => string; Search: string; Create: string };
    Item: {
      Info: (count: number) => string;
      Chat: string;
      View: string;
      Edit: string;
      Delete: string;
      DeleteConfirm: string
    };
    EditModal: { Title: (readonly: boolean) => string; Download: string; Clone: string };
    Config: {
      Avatar: string;
      Name: string;
      Sync: { Title: string; SubTitle: string; Confirm: string };
      HideContext: { Title: string; SubTitle: string };
      Artifacts: { Title: string; SubTitle: string };
      CodeFold: { Title: string; SubTitle: string };
      Share: { Title: string; SubTitle: string; Action: string }
    }
  };
  NewChat: {
    Return: string;
    Skip: string;
    Title: string;
    SubTitle: string;
    More: string;
    NotShow: string;
    ConfirmNoShow: string
  };
  UI: {
    Confirm: string;
    Cancel: string;
    Close: string;
    Create: string;
    Edit: string;
    Export: string;
    Import: string;
    Sync: string;
    Config: string
  };
  Exporter: { Description: { Title: string }; Model: string; Messages: string; Topic: string; Time: string };
  URLCommand: { Code: string; Settings: string };
  SdPanel: {
    Prompt: string;
    NegativePrompt: string;
    PleaseInput: (name: string) => string;
    AspectRatio: string;
    ImageStyle: string;
    OutFormat: string;
    AIModel: string;
    ModelVersion: string;
    Submit: string;
    ParamIsRequired: (name: string) => string;
    Styles: {
      D3Model: string;
      AnalogFilm: string;
      Anime: string;
      Cinematic: string;
      ComicBook: string;
      DigitalArt: string;
      Enhance: string;
      FantasyArt: string;
      Isometric: string;
      LineArt: string;
      LowPoly: string;
      ModelingCompound: string;
      NeonPunk: string;
      Origami: string;
      Photographic: string;
      PixelArt: string;
      TileTexture: string
    }
  };
  Sd: {
    SubTitle: (count: number) => string;
    Actions: { Params: string; Copy: string; Delete: string; Retry: string; ReturnHome: string; History: string };
    EmptyRecord: string;
    Status: { Name: string; Success: string; Error: string; Wait: string; Running: string };
    Danger: { Delete: string };
    GenerateParams: string;
    Detail: string
  }
} = {
  WIP: "Coming Soon...",
  Error: {
    Unauthorized: isApp
      ? `😆 Oops, there's an issue. No worries:
     \\ 1️⃣ New here? [Click to start chatting now 🚀](${SAAS_CHAT_UTM_URL})
     \\ 2️⃣ Want to use your own OpenAI resources? [Click here](/#/settings) to change settings ⚙️`
      : `😆 Oops, there's an issue. Let's fix it:
     \ 1️⃣ New here? [Click to start chatting now 🚀](${SAAS_CHAT_UTM_URL})
     \ 2️⃣ Using a private setup? [Click here](/#/auth) to enter your key 🔑
     \ 3️⃣ Want to use your own OpenAI resources? [Click here](/#/settings) to change settings ⚙️
     `,
  },
  Auth: {
    Return: "Return",
    Title: "Need Access Code",
    Tips: "Please enter access code below",
    SubTips: "Or enter your OpenAI or Google API Key",
    Input: "access code",
    Confirm: "Confirm",
    Later: "Later",
    SaasTips: "Too Complex, Use Immediately Now",
    TopTips:
      "🥳 NextChat AI launch promotion: Instantly unlock the latest models like OpenAI o1, GPT-4o, Claude-3.5!",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} messages`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} messages`,
    EditMessage: {
      Title: "Edit All Messages",
      Topic: {
        Title: "Topic",
        SubTitle: "Change the current topic",
      },
    },
    Actions: {
      ChatList: "Go To Chat List",
      CompressedHistory: "Compressed History Memory Prompt",
      Export: "Export All Messages as Markdown",
      Copy: "Copy",
      Stop: "Stop",
      Retry: "Retry",
      Pin: "Pin",
      PinToastContent: "Pinned 1 messages to contextual prompts",
      PinToastAction: "View",
      Delete: "Delete",
      Edit: "Edit",
      FullScreen: "FullScreen",
      RefreshTitle: "Refresh Title",
      RefreshToast: "Title refresh request sent",
      Speech: "Play",
      StopSpeech: "Stop",
    },
    Commands: {
      new: "Start a new chat",
      newm: "Start a new chat with mask",
      next: "Next Chat",
      prev: "Previous Chat",
      clear: "Clear Context",
      fork: "Copy Chat",
      del: "Delete Chat",
    },
    InputActions: {
      Stop: "Stop",
      ToBottom: "To Latest",
      Theme: {
        auto: "Auto",
        light: "Light Theme",
        dark: "Dark Theme",
      },
      Prompt: "Prompts",
      Masks: "Masks",
      Clear: "Clear Context",
      Settings: "Settings",
      UploadImage: "Upload Images",
    },
    Rename: "Rename Chat",
    Typing: "Typing…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} to send`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter to wrap";
      }
      return inputHints + ", / to search prompts, : to use commands";
    },
    Send: "Send",
    StartSpeak: "Start Speak",
    StopSpeak: "Stop Speak",
    Config: {
      Reset: "Reset to Default",
      SaveAs: "Save as Mask",
    },
    IsContext: "Contextual Prompt",
    ShortcutKey: {
      Title: "Keyboard Shortcuts",
      newChat: "Open New Chat",
      focusInput: "Focus Input Field",
      copyLastMessage: "Copy Last Reply",
      copyLastCode: "Copy Last Code Block",
      showShortcutKey: "Show Shortcuts",
      clearContext: "Clear Context",
    },
  },
  Export: {
    Title: "Export Messages",
    Copy: "Copy All",
    Download: "Download",
    MessageFromYou: "Message From You",
    MessageFromChatGPT: "Message From ChatGPT",
    Share: "Share to ShareGPT",
    Format: {
      Title: "Export Format",
      SubTitle: "Markdown or PNG Image",
    },
    IncludeContext: {
      Title: "Including Context",
      SubTitle: "Export context prompts in mask or not",
    },
    Steps: {
      Select: "Select",
      Preview: "Preview",
    },
    Image: {
      Toast: "Capturing Image...",
      Modal: "Long press or right click to save image",
    },
    Artifacts: {
      Title: "Share Artifacts",
      Error: "Share Error",
    },
  },
  Select: {
    Search: "Search",
    All: "Select All",
    Latest: "Select Latest",
    Clear: "Clear",
  },
  Memory: {
    Title: "Memory Prompt",
    EmptyContent: "Nothing yet.",
    Send: "Send Memory",
    Copy: "Copy Memory",
    Reset: "Reset Session",
    ResetConfirm:
      "Resetting will clear the current conversation history and historical memory. Are you sure you want to reset?",
  },
  Home: {
    NewChat: "New Chat",
    DeleteChat: "Confirm to delete the selected conversation?",
    DeleteToast: "Chat Deleted",
    Revert: "Revert",
  },
  Settings: {
    Title: "Settings",
    SubTitle: "All Settings",
    ShowPassword: "ShowPassword",
    Danger: {
      Reset: {
        Title: "Reset All Settings",
        SubTitle: "Reset all setting items to default",
        Action: "Reset",
        Confirm: "Confirm to reset all settings to default?",
      },
      Clear: {
        Title: "Clear All Data",
        SubTitle: "Clear all messages and settings",
        Action: "Clear",
        Confirm: "Confirm to clear all messages and settings?",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "All Languages",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Font Size",
      SubTitle: "Adjust font size of chat content",
    },
    FontFamily: {
      Title: "Chat Font Family",
      SubTitle:
        "Font Family of the chat content, leave empty to apply global default font",
      Placeholder: "Font Family Name",
    },
    InjectSystemPrompts: {
      Title: "Inject System Prompts",
      SubTitle: "Inject a global system prompt for every request",
    },
    InputTemplate: {
      Title: "Input Template",
      SubTitle: "Newest message will be filled to this template",
    },

    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Latest version",
      CheckUpdate: "Check Update",
      IsChecking: "Checking update...",
      FoundUpdate: (x: string) => `Found new version: ${x}`,
      GoToUpdate: "Update",
      Success: "Update Successful.",
      Failed: "Update Failed.",
    },
    SendKey: "Send Key",
    Theme: "Theme",
    TightBorder: "Tight Border",
    SendPreviewBubble: {
      Title: "Send Preview Bubble",
      SubTitle: "Preview markdown in bubble",
    },
    AutoGenerateTitle: {
      Title: "Auto Generate Title",
      SubTitle: "Generate a suitable title based on the conversation content",
    },
    Sync: {
      CloudState: "Last Update",
      NotSyncYet: "Not sync yet",
      Success: "Sync Success",
      Fail: "Sync Fail",

      Config: {
        Modal: {
          Title: "Config Sync",
          Check: "Check Connection",
        },
        SyncType: {
          Title: "Sync Type",
          SubTitle: "Choose your favorite sync service",
        },
        Proxy: {
          Title: "Enable CORS Proxy",
          SubTitle: "Enable a proxy to avoid cross-origin restrictions",
        },
        ProxyUrl: {
          Title: "Proxy Endpoint",
          SubTitle:
            "Only applicable to the built-in CORS proxy for this project",
        },

        WebDav: {
          Endpoint: "WebDAV Endpoint",
          UserName: "User Name",
          Password: "Password",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST Url",
          UserName: "Backup Name",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "Local Data",
      Overview: (overview: any) => {
        return `${overview.chat} chats，${overview.message} messages，${overview.prompt} prompts，${overview.mask} masks`;
      },
      ImportFailed: "Failed to import from file",
    },
    Mask: {
      Splash: {
        Title: "Mask Splash Screen",
        SubTitle: "Show a mask splash screen before starting new chat",
      },
      Builtin: {
        Title: "Hide Builtin Masks",
        SubTitle: "Hide builtin masks in mask list",
      },
    },
    Prompt: {
      Disable: {
        Title: "Disable auto-completion",
        SubTitle: "Input / to trigger auto-completion",
      },
      List: "Prompt List",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      Edit: "Edit",
      Modal: {
        Title: "Prompt List",
        Add: "Add One",
        Search: "Search Prompts",
      },
      EditModal: {
        Title: "Edit Prompt",
      },
    },
    HistoryCount: {
      Title: "Attached Messages Count",
      SubTitle: "Number of sent messages attached per request",
    },
    CompressThreshold: {
      Title: "History Compression Threshold",
      SubTitle:
        "Will compress if uncompressed messages length exceeds the value",
    },

    Usage: {
      Title: "Account Balance",
      SubTitle(used: any, total: any) {
        return `Used this month $${used}, subscription $${total}`;
      },
      IsChecking: "Checking...",
      Check: "Check",
      NoAccess: "Enter API Key to check balance",
    },
    Access: {
      SaasStart: {
        Title: "Use NextChat AI",
        Label: " (Most Cost-Effective Option)",
        SubTitle:
          "Maintained by NextChat, zero setup needed, unlock OpenAI o1, GPT-4o," +
          " Claude-3.5 and more",
        ChatNow: "Start Now",
      },
      AccessCode: {
        Title: "Access Code",
        SubTitle: "Access control Enabled",
        Placeholder: "Enter Code",
      },
      CustomEndpoint: {
        Title: "Custom Endpoint",
        SubTitle: "Use custom Azure or OpenAI service",
      },
      Provider: {
        Title: "Model Provider",
        SubTitle: "Select Azure or OpenAI",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle: "User custom OpenAI Api Key",
          Placeholder: "sk-xxx",
        },

        Endpoint: {
          Title: "OpenAI Endpoint",
          SubTitle: "Must start with http(s):// or use /api/openai as default",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure Api Key",
          SubTitle: "Check your api key from Azure console",
          Placeholder: "Azure Api Key",
        },

        Endpoint: {
          Title: "Azure Endpoint",
          SubTitle: "Example: ",
        },

        ApiVerion: {
          Title: "Azure Api Version",
          SubTitle: "Check your api version from azure console",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle:
            "Use a custom Anthropic Key to bypass password access restrictions",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },

        ApiVerion: {
          Title: "API Version (claude api version)",
          SubTitle: "Select and input a specific API version",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "Use a custom Baidu API Key",
          Placeholder: "Baidu API Key",
        },
        SecretKey: {
          Title: "Baidu Secret Key",
          SubTitle: "Use a custom Baidu Secret Key",
          Placeholder: "Baidu Secret Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "not supported, configure in .env",
        },
      },
      Tencent: {
        ApiKey: {
          Title: "Tencent API Key",
          SubTitle: "Use a custom Tencent API Key",
          Placeholder: "Tencent API Key",
        },
        SecretKey: {
          Title: "Tencent Secret Key",
          SubTitle: "Use a custom Tencent Secret Key",
          Placeholder: "Tencent Secret Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "not supported, configure in .env",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "Use a custom ByteDance API Key",
          Placeholder: "ByteDance API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle: "Use a custom Alibaba Cloud API Key",
          Placeholder: "Alibaba Cloud API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      Moonshot: {
        ApiKey: {
          Title: "Moonshot API Key",
          SubTitle: "Use a custom Moonshot API Key",
          Placeholder: "Moonshot API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      DeepSeek: {
        ApiKey: {
          Title: "DeepSeek API Key",
          SubTitle: "Use a custom DeepSeek API Key",
          Placeholder: "DeepSeek API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      XAI: {
        ApiKey: {
          Title: "XAI API Key",
          SubTitle: "Use a custom XAI API Key",
          Placeholder: "XAI API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      ChatGLM: {
        ApiKey: {
          Title: "ChatGLM API Key",
          SubTitle: "Use a custom ChatGLM API Key",
          Placeholder: "ChatGLM API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      SiliconFlow: {
        ApiKey: {
          Title: "SiliconFlow API Key",
          SubTitle: "Use a custom SiliconFlow API Key",
          Placeholder: "SiliconFlow API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      Stability: {
        ApiKey: {
          Title: "Stability API Key",
          SubTitle: "Use a custom Stability API Key",
          Placeholder: "Stability API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      Iflytek: {
        ApiKey: {
          Title: "Iflytek API Key",
          SubTitle: "Use a Iflytek API Key",
          Placeholder: "Iflytek API Key",
        },
        ApiSecret: {
          Title: "Iflytek API Secret",
          SubTitle: "Use a Iflytek API Secret",
          Placeholder: "Iflytek API Secret",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      CustomModel: {
        Title: "Custom Models",
        SubTitle: "Custom model options, seperated by comma",
      },
      Google: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "Obtain your API Key from Google AI",
          Placeholder: "Google AI API Key",
        },

        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },

        ApiVersion: {
          Title: "API Version (specific to gemini-pro)",
          SubTitle: "Select a specific API version",
        },
        GoogleSafetySettings: {
          Title: "Google Safety Settings",
          SubTitle: "Select a safety filtering level",
        },
      },
    },

    Model: "Model",
    CompressModel: {
      Title: "Summary Model",
      SubTitle: "Model used to compress history and generate title",
    },
    Temperature: {
      Title: "Temperature",
      SubTitle: "A larger value makes the more random output",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Do not alter this value together with temperature",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Maximum length of input tokens and generated tokens",
    },
    PresencePenalty: {
      Title: "Presence Penalty",
      SubTitle:
        "A larger value increases the likelihood to talk about new topics",
    },
    FrequencyPenalty: {
      Title: "Frequency Penalty",
      SubTitle:
        "A larger value decreasing the likelihood to repeat the same line",
    },
    TTS: {
      Enable: {
        Title: "Enable TTS",
        SubTitle: "Enable text-to-speech service",
      },
      Autoplay: {
        Title: "Enable Autoplay",
        SubTitle:
          "Automatically generate speech and play, you need to enable the text-to-speech switch first",
      },
      Model: "Model",
      Voice: {
        Title: "Voice",
        SubTitle: "The voice to use when generating the audio",
      },
      Speed: {
        Title: "Speed",
        SubTitle: "The speed of the generated audio",
      },
      Engine: "TTS Engine",
    },
    Realtime: {
      Enable: {
        Title: "Realtime Chat",
        SubTitle: "Enable realtime chat feature",
      },
      Provider: {
        Title: "Model Provider",
        SubTitle: "Switch between different providers",
      },
      Model: {
        Title: "Model",
        SubTitle: "Select a model",
      },
      ApiKey: {
        Title: "API Key",
        SubTitle: "API Key",
        Placeholder: "API Key",
      },
      Azure: {
        Endpoint: {
          Title: "Endpoint",
          SubTitle: "Endpoint",
        },
        Deployment: {
          Title: "Deployment Name",
          SubTitle: "Deployment Name",
        },
      },
      Temperature: {
        Title: "Randomness (temperature)",
        SubTitle: "Higher values result in more random responses",
      },
    },
  },
  Store: {
    DefaultTopic: "New Conversation",
    BotHello: "Hello! How can I assist you today?",
    Error: "Something went wrong, please try again later.",
    Prompt: {
      History: (content: string) =>
        "This is a summary of the chat history as a recap: " + content,
      Topic:
        "Please generate a four to five word title summarizing our conversation without any lead-in, punctuation, quotation marks, periods, symbols, bold text, or additional text. Remove enclosing quotation marks.",
      Summarize:
        "Summarize the discussion briefly in 200 words or less to use as a prompt for future context.",
    },
  },
  Copy: {
    Success: "Copied to clipboard",
    Failed: "Copy failed, please grant permission to access clipboard",
  },
  Download: {
    Success: "Content downloaded to your directory.",
    Failed: "Download failed.",
  },
  Context: {
    Toast: (x: any) => `With ${x} contextual prompts`,
    Edit: "Current Chat Settings",
    Add: "Add a Prompt",
    Clear: "Context Cleared",
    Revert: "Revert",
  },
  Discovery: {
    Name: "Discovery",
  },
  Mcp: {
    Name: "MCP",
  },
  FineTuned: {
    Sysmessage: "You are an assistant that",
  },
  SearchChat: {
    Name: "Search",
    Page: {
      Title: "Search Chat History",
      Search: "Enter search query to search chat history",
      NoResult: "No results found",
      NoData: "No data",
      Loading: "Loading...",

      SubTitle: (count: number) => `Found ${count} results`,
    },
    Item: {
      View: "View",
    },
  },
  Plugin: {
    Name: "Plugin",
    Page: {
      Title: "Plugins",
      SubTitle: (count: number) => `${count} plugins`,
      Search: "Search Plugin",
      Create: "Create",
      Find: "You can find awesome plugins on github: ",
    },
    Item: {
      Info: (count: number) => `${count} method`,
      View: "View",
      Edit: "Edit",
      Delete: "Delete",
      DeleteConfirm: "Confirm to delete?",
    },
    Auth: {
      None: "None",
      Basic: "Basic",
      Bearer: "Bearer",
      Custom: "Custom",
      CustomHeader: "Parameter Name",
      Token: "Token",
      Proxy: "Using Proxy",
      ProxyDescription: "Using proxies to solve CORS error",
      Location: "Location",
      LocationHeader: "Header",
      LocationQuery: "Query",
      LocationBody: "Body",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Plugin ${readonly ? "(readonly)" : ""}`,
      Download: "Download",
      Auth: "Authentication Type",
      Content: "OpenAPI Schema",
      Load: "Load From URL",
      Method: "Method",
      Error: "OpenAPI Schema Error",
    },
  },
  Mask: {
    Name: "Mask",
    Page: {
      Title: "Prompt Template",
      SubTitle: (count: number) => `${count} prompt templates`,
      Search: "Search Templates",
      Create: "Create",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Chat",
      View: "View",
      Edit: "Edit",
      Delete: "Delete",
      DeleteConfirm: "Confirm to delete?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Prompt Template ${readonly ? "(readonly)" : ""}`,
      Download: "Download",
      Clone: "Clone",
    },
    Config: {
      Avatar: "Bot Avatar",
      Name: "Bot Name",
      Sync: {
        Title: "Use Global Config",
        SubTitle: "Use global config in this chat",
        Confirm: "Confirm to override custom config with global config?",
      },
      HideContext: {
        Title: "Hide Context Prompts",
        SubTitle: "Do not show in-context prompts in chat",
      },
      Artifacts: {
        Title: "Enable Artifacts",
        SubTitle: "Can render HTML page when enable artifacts.",
      },
      CodeFold: {
        Title: "Enable CodeFold",
        SubTitle:
          "Automatically collapse/expand overly long code blocks when CodeFold is enabled",
      },
      Share: {
        Title: "Share This Mask",
        SubTitle: "Generate a link to this mask",
        Action: "Copy Link",
      },
    },
  },
  NewChat: {
    Return: "Return",
    Skip: "Just Start",
    Title: "Pick a Mask",
    SubTitle: "Chat with the Soul behind the Mask",
    More: "Find More",
    NotShow: "Never Show Again",
    ConfirmNoShow: "Confirm to disable？You can enable it in settings later.",
  },

  UI: {
    Confirm: "Confirm",
    Cancel: "Cancel",
    Close: "Close",
    Create: "Create",
    Edit: "Edit",
    Export: "Export",
    Import: "Import",
    Sync: "Sync",
    Config: "Config",
  },
  Exporter: {
    Description: {
      Title: "Only messages after clearing the context will be displayed",
    },
    Model: "Model",
    Messages: "Messages",
    Topic: "Topic",
    Time: "Time",
  },
  URLCommand: {
    Code: "Detected access code from url, confirm to apply? ",
    Settings: "Detected settings from url, confirm to apply?",
  },
  SdPanel: {
    Prompt: "Prompt",
    NegativePrompt: "Negative Prompt",
    PleaseInput: (name: string) => `Please input ${name}`,
    AspectRatio: "Aspect Ratio",
    ImageStyle: "Image Style",
    OutFormat: "Output Format",
    AIModel: "AI Model",
    ModelVersion: "Model Version",
    Submit: "Submit",
    ParamIsRequired: (name: string) => `${name} is required`,
    Styles: {
      D3Model: "3d-model",
      AnalogFilm: "analog-film",
      Anime: "anime",
      Cinematic: "cinematic",
      ComicBook: "comic-book",
      DigitalArt: "digital-art",
      Enhance: "enhance",
      FantasyArt: "fantasy-art",
      Isometric: "isometric",
      LineArt: "line-art",
      LowPoly: "low-poly",
      ModelingCompound: "modeling-compound",
      NeonPunk: "neon-punk",
      Origami: "origami",
      Photographic: "photographic",
      PixelArt: "pixel-art",
      TileTexture: "tile-texture",
    },
  },
  Sd: {
    SubTitle: (count: number) => `${count} images`,
    Actions: {
      Params: "See Params",
      Copy: "Copy Prompt",
      Delete: "Delete",
      Retry: "Retry",
      ReturnHome: "Return Home",
      History: "History",
    },
    EmptyRecord: "No images yet",
    Status: {
      Name: "Status",
      Success: "Success",
      Error: "Error",
      Wait: "Waiting",
      Running: "Running",
    },
    Danger: {
      Delete: "Confirm to delete?",
    },
    GenerateParams: "Generate Params",
    Detail: "Detail",
  },
};

export default en;
