<ul>
                    {section.links.map((link, linkIndex) => (
                      <li
                        key={linkIndex}
                        className="flex items-center mb-2 text-sm font-normal"
                      >
                    {link.icon ? (
                        <i className={`${link.icon} mr-2 text-blue-600`}></i>
                      ) : (
                        <Image
                          src={link.image}
                          alt={link.name}
                          className="w-6 h-6 mr-2"
                        />
                      )}
                        <a className="ml-2 cursor-pointer hover:text-blue-500">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>