export interface IBlog {
  id: number
  date: string
  date_gmt: string
  guid: GUID
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: GUID
  content: Content
  excerpt: Content
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: Meta
  categories: number[]
  tags: number[]
  post_format: any[]
  class_list: string[]
  jetpack_sharing_enabled: boolean
  jetpack_featured_media_url: string
  _thumbnail_id: string
  _wp_page_template: string
  'post-gallery': string
  _elementor_edit_mode: string
  _elementor_template_type: string
  _elementor_version: string
  _liquid_views_count: string
  _elementor_page_settings: string
  _elementor_data: string
  _elementor_page_assets: string
  _elementor_controls_usage: string
  _dp_original: string
  rs_page_bg_color: string
  _links: Links
}

export interface Links {
  self: About[]
  collection: About[]
  about: About[]
  author: Author[]
  replies: Author[]
  'version-history': VersionHistory[]
  'predecessor-version': PredecessorVersion[]
  'wp:featuredmedia': Author[]
  'wp:attachment': About[]
  'wp:term': WpTerm[]
  curies: Cury[]
}

export interface About {
  href: string
}

export interface Author {
  embeddable: boolean
  href: string
}

export interface Cury {
  name: string
  href: string
  templated: boolean
}

export interface PredecessorVersion {
  id: number
  href: string
}

export interface VersionHistory {
  count: number
  href: string
}

export interface WpTerm {
  taxonomy: string
  embeddable: boolean
  href: string
}

export interface Content {
  rendered: string
  protected: boolean
}

export interface GUID {
  rendered: string
}

export interface Meta {
  _jetpack_memberships_contains_paid_content: boolean
  footnotes: string
}
